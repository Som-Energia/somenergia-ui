import SomStepperLinearProgress from "."

const defaultSteps = {
  STEP1: 1,
  STEP2: 2,
  STEP3: 3,
}

const meta = {
  title: "Base Components/SomStepperLinearProgress",
  component: SomStepperLinearProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "min(480px, 90vw)" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    activeStep: {
      control: {
        type: "number",
        min: 0,
      },
    },
    steps: {
      control: false,
    },
    stepsNum: {
      control: {
        type: "number",
        min: 0,
      },
    },
    showStepTitle: {
      control: "boolean",
    },
    stepTitle: {
      control: "text",
    },
  },
  args: {
    activeStep: 0,
    steps: defaultSteps,
    stepsNum: undefined,
    showStepTitle: false,
    stepTitle: "Step",
  },
}

export default meta

export const Default = {}

export const WithStepTitle = {
  args: {
    activeStep: 1,
    showStepTitle: true,
    stepTitle: "STEP_TITLE",
  },
}

export const FirstStep = {
  args: {
    activeStep: 0,
  },
}

export const MiddleStep = {
  args: {
    activeStep: 1,
  },
}

export const LastStep = {
  args: {
    activeStep: Object.keys(defaultSteps).length - 1,
  },
}

export const WithExplicitStepCount = {
  args: {
    activeStep: 1,
    steps: {},
    stepsNum: 4,
  },
}

export const WithoutSteps = {
  args: {
    steps: {},
    stepsNum: undefined,
  },
}
