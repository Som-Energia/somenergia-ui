import { render, screen } from "@testing-library/react"

import SomStepperLinearProgress from "./"

describe("SomStepperLinearProgress", () => {
  test("renders the current step label and progressbar when totalSteps is greater than zero", () => {
    render(<SomStepperLinearProgress totalSteps={3} currentStep={2} />)

    expect(screen.getByText("2/3")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("renders the step title when showStepTitle is enabled", () => {
    render(
      <SomStepperLinearProgress
        totalSteps={3}
        currentStep={2}
        showStepTitle
        stepTitle="STEP_TITLE"
      />,
    )

    expect(screen.getByText("STEP_TITLE 2/3")).toBeInTheDocument()
  })

  test("sets the progress value from currentStep over totalSteps", () => {
    render(<SomStepperLinearProgress totalSteps={3} currentStep={2} />)

    const progressValue = Number(
      screen.getByRole("progressbar").getAttribute("aria-valuenow"),
    )

    expect(progressValue).toBe(Math.round((2 / 3) * 100))
  })

  test("renders nothing when totalSteps is missing", () => {
    const { container } = render(<SomStepperLinearProgress />)

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
    expect(container).toBeEmptyDOMElement()
  })
})
