import { render } from "@testing-library/react"

import SomStepperLinearProgress from "./"

const steps = { STEP1: 1, STEP2: 2, STEP3: 3 }

describe("SomStepper component ", async () => {
  describe("SomStepper with steps object", () => {
    test("SomStepper renders without crashing", () => {
      const { getByRole } = render(
        <SomStepperLinearProgress steps={steps} activeStep={1} />,
      )

      expect(getByRole("progressbar")).toBeInTheDocument()
    })

    test("SomStepper renders exact number of steps", () => {
      const { getByText } = render(
        <SomStepperLinearProgress steps={steps} activeStep={1} />,
      )

      expect(getByText("2/3")).toBeInTheDocument()
    })

    test("SomStepper with step title renders without crashing", () => {
      const { getByText } = render(
        <SomStepperLinearProgress
          steps={steps}
          activeStep={1}
          showStepTitle
          stepTitle={"STEP_TITLE"}
        />,
      )

      const expectedStepTitle = `STEP_TITLE 2/${Object.keys(steps).length}`
      expect(getByText(expectedStepTitle)).toBeInTheDocument()
    })

    test("SomStepper renders with progressbar", () => {
      const activeStep = 1
      const { getByRole } = render(
        <SomStepperLinearProgress steps={steps} activeStep={activeStep} />,
      )

      // Calculate the progress
      // activeStep starts at 0
      const internalActiveStep = activeStep + 1
      const numSteps = Object.keys(steps).length
      // Component calculate percent with Math.ceil
      const expectedValue = Math.ceil((internalActiveStep / numSteps) * 100)

      // Rendered progress value
      const progressValue = Number(
        getByRole("progressbar").getAttribute("aria-valuenow"),
      )
      expect(expectedValue).toBe(progressValue)
    })
  })

  describe("SomStepper with stepsNum", () => {
    test("SomStepper renders without crashing", () => {
      const { getByRole } = render(
        <SomStepperLinearProgress stepsNum={3} activeStep={1} />,
      )

      expect(getByRole("progressbar")).toBeInTheDocument()
    })
  })

  test("SomStepper without steps renders without crashing", () => {
    const { queryByRole } = render(<SomStepperLinearProgress />)
    expect(queryByRole("progressbar")).not.toBeInTheDocument()
  })
})
