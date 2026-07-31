import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"

import SomStepper from "."

const steps = [
  <div key={0}>HELLO</div>,
  <div key={1}>DARLING</div>,
  <div key={2}>BYE</div>,
]

describe("SomStepper", () => {
  test("renders the active step and only the next button on the first step", () => {
    render(<SomStepper steps={steps} activeStep={0} disableNext={false} />)

    expect(screen.getByText("HELLO")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Previous" }),
    ).not.toBeInTheDocument()
  })

  test("calls setActiveStep with a bounded updater when next is clicked", () => {
    const setActiveStep = vi.fn()

    render(
      <SomStepper
        steps={steps}
        activeStep={1}
        setActiveStep={setActiveStep}
        disableNext={false}
      />,
    )

    fireEvent.click(screen.getByRole("button", { name: "Next" }))

    expect(setActiveStep).toHaveBeenCalledTimes(1)

    const updateStep = setActiveStep.mock.calls[0][0]
    expect(updateStep(1)).toBe(2)
    expect(updateStep(steps.length)).toBe(steps.length)
  })

  test("renders previous and next buttons on intermediate steps with custom labels", () => {
    render(
      <SomStepper
        steps={steps}
        activeStep={1}
        disableNext={false}
        nextButtonLabel="Continue"
        prevButtonLabel="Back"
      />,
    )

    expect(screen.getByText("DARLING")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument()
  })

  test("renders the finish button on the last step and hides navigation when requested", () => {
    render(
      <SomStepper
        steps={steps}
        activeStep={steps.length - 1}
        hidePreviousButton
        finishButton={<button type="button">Finish</button>}
      />,
    )

    expect(screen.getByText("BYE")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Finish" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Next" }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Previous" }),
    ).not.toBeInTheDocument()
  })

  test("renders children instead of the step content when provided", () => {
    render(
      <SomStepper steps={steps} activeStep={1}>
        Custom content
      </SomStepper>,
    )

    expect(screen.getByText("Custom content")).toBeInTheDocument()
    expect(screen.queryByText("DARLING")).not.toBeInTheDocument()
  })
})
