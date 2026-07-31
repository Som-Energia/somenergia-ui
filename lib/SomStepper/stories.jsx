// SomStepper.stories.jsx

import { Paper, Typography } from "@mui/material"

import { useArgs } from "@storybook/preview-api"

import NextButton from "../Buttons/NextButton"
import SubmitButton from "../Buttons/SubmitButton"
import SomStepper from "./"

const StepContent = ({ title, description }) => (
  <Paper
    variant="outlined"
    sx={{
      padding: 4,
      minHeight: 180,
    }}>
    <Typography variant="h5" component="h2" gutterBottom>
      {title}
    </Typography>

    <Typography color="text.secondary">{description}</Typography>
  </Paper>
)

const defaultSteps = [
  <StepContent
    key="personal-data"
    title="Personal data"
    description="Enter your personal data"
  />,
  <StepContent
    key="contract-data"
    title="Contract data"
    description="Review the contract data"
  />,
  <StepContent
    key="confirmation"
    title="Confirm"
    description="All the data is correct"
  />,
]

const meta = {
  title: "Base Components/SomStepper",
  component: SomStepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "min(800px, 90vw)" }}>
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
    setActiveStep: {
      table: {
        disable: true,
      },
    },
    steps: {
      control: false,
    },
    children: {
      control: false,
    },
    nextButton: {
      control: false,
    },
    finishButton: {
      control: false,
    },
    disableNext: {
      control: "boolean",
    },
    hidePreviousButton: {
      control: "boolean",
    },
    nextButtonLabel: {
      control: "text",
    },
    prevButtonLabel: {
      control: "text",
    },
  },
  args: {
    activeStep: 0,
    steps: defaultSteps,
    disableNext: false,
    nextButtonLabel: "Next",
    prevButtonLabel: "Previous",
  },
}

export default meta

const ControlledStepper = (args) => {
  const [{ activeStep }, updateArgs] = useArgs()

  const setActiveStep = (valueOrUpdater) => {
    const nextActiveStep =
      typeof valueOrUpdater === "function"
        ? valueOrUpdater(activeStep)
        : valueOrUpdater

    updateArgs({
      activeStep: nextActiveStep,
    })
  }

  return (
    <SomStepper
      {...args}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />
  )
}

export const Default = {
  render: ControlledStepper,
  args: {
    finishButton: (
      <SubmitButton
        variant="contained"
        onClick={() => alert("Process completed")}>
        Finish
      </SubmitButton>
    ),
  },
}

export const FirstStep = {
  render: ControlledStepper,
  args: {
    activeStep: 0,
    finishButton: <SubmitButton variant="contained">Finish</SubmitButton>,
  },
}

export const MiddleStep = {
  render: ControlledStepper,
  args: {
    activeStep: 1,
    finishButton: <SubmitButton variant="contained">Finish</SubmitButton>,
  },
}

export const LastStep = {
  render: ControlledStepper,
  args: {
    activeStep: defaultSteps.length - 1,
    finishButton: (
      <SubmitButton variant="contained" color="primary">
        Confirm
      </SubmitButton>
    ),
  },
}

export const LastStepCenteredFinishButton = {
  render: ControlledStepper,
  args: {
    activeStep: defaultSteps.length - 1,
    hidePreviousButton: true,
    finishButton: (
      <SubmitButton variant="contained" color="primary">
        Confirm
      </SubmitButton>
    ),
  },
}

export const NextDisabled = {
  render: ControlledStepper,
  args: {
    disableNext: true,
    finishButton: <SubmitButton variant="contained">Finish</SubmitButton>,
  },
}

export const CustomNextButton = {
  render: ControlledStepper,
  args: {
    nextButton: (
      <NextButton
        variant="outlined"
        onClick={() => {
          alert("The custom button must manually handle the step change.")
        }}>
        Save and continue
      </NextButton>
    ),
    finishButton: <SubmitButton variant="contained">Finish</SubmitButton>,
  },
}

export const WithChildren = {
  render: ControlledStepper,
  args: {
    children: (
      <StepContent
        title="Personalized content"
        description="When children is provided, this content takes priority over the content defined in steps."
      />
    ),
    finishButton: <SubmitButton variant="contained">Finish</SubmitButton>,
  },
}

export const SingleStep = {
  render: ControlledStepper,
  args: {
    steps: [
      <StepContent
        key="single-step"
        title="Single step"
        description="This flow only contains one step."
      />,
    ],
    finishButton: <SubmitButton variant="contained">Finish</SubmitButton>,
  },
}

export const Empty = {
  render: ControlledStepper,
  args: {
    steps: [],
    showStepProgress: true,
    finishButton: null,
  },
}
