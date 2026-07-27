import { render } from "@testing-library/react"
import { expect } from "vitest"

import SomStepper from "./"

const steps = [
  <div key={0}>HELLO</div>,
  <div key={1}>DARLING</div>,
  <div key={2}>BYE</div>,
]

describe("SomStepper component ", async () => {
  // avoid warnings

  describe("SomStepper with steps", () => {
    test("SomStepper renders", () => {
      const { queryByRole } = render(
        <SomStepper steps={steps} activeStep={0} />,
      )

      expect(queryByRole("progressbar")).toBeInTheDocument()
    })

    test("SomStepper renders exact number of steps", () => {
      const { queryByText } = render(
        <SomStepper steps={steps} activeStep={1} />,
      )

      const expectedText = `2/${steps.length}`
      expect(queryByText(expectedText)).toBeInTheDocument()
    })

    test("SomStepper limit the max steps number when overflow activeStep", () => {
      const { queryByText } = render(
        <SomStepper steps={steps} activeStep={99} />,
      )

      const expectedText = `${steps.length}/${steps.length}`
      expect(queryByText(expectedText)).toBeInTheDocument()
    })

    test("SomStepper with step title renders without crashing", () => {
      const { queryByText } = render(
        <SomStepper
          steps={steps}
          activeStep={1}
          showStepTitle
          stepTitle={"STEP_TITLE"}
        />,
      )

      const expectedStepTitle = `STEP_TITLE 2/${steps.length}`
      expect(
        queryByText(expectedStepTitle, {
          trim: false,
          collapseWhitespace: false,
        }),
      ).toBeInTheDocument()
    })

    test("SomStepper renders with progressbar", () => {
      const activeStep = 1
      const { queryByRole } = render(
        <SomStepper steps={steps} activeStep={activeStep} />,
      )

      // Calculate the progress
      // activeStep starts at 0
      const internalActiveStep = activeStep + 1
      const numSteps = steps.length
      // Component calculate percent with Math.ceil
      const expectedValue = Math.ceil((internalActiveStep / numSteps) * 100)

      // Rendered progress value
      const progressValue = Number(
        queryByRole("progressbar").getAttribute("aria-valuenow"),
      )
      expect(expectedValue).toBe(progressValue)
    })
  })

  describe("SomStepper without steps", () => {
    test("SomStepper renders", () => {
      const { queryByRole } = render(<SomStepper />)
      expect(queryByRole("progressbar")).not.toBeInTheDocument()
    })
    test("SomStepper without the steps progressbar header", () => {
      const { queryByText } = render(
        <SomStepper showStepProgress={false}>Content</SomStepper>,
      )
      expect(queryByText("STEP_TITLE")).not.toBeInTheDocument()
    })
  })
})
