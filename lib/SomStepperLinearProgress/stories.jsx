import SomStepperLinearProgress from "."

const defaultTotalSteps = 3

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
    currentStep: {
      control: {
        type: "number",
        min: 0,
      },
    },
    totalSteps: {
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
    currentStep: 1,
    totalSteps: defaultTotalSteps,
    showStepTitle: false,
    stepTitle: "Step",
  },
}

export default meta

export const Default = {}

export const WithStepTitle = {
  args: {
    currentStep: 2,
    showStepTitle: true,
    stepTitle: "STEP_TITLE",
  },
}

export const FirstStep = {
  args: {
    currentStep: 1,
  },
}

export const MiddleStep = {
  args: {
    currentStep: 2,
  },
}

export const LastStep = {
  args: {
    currentStep: defaultTotalSteps,
  },
}

export const Empty = {
  args: {
    currentStep: 0,
    totalSteps: 0,
  },
}
