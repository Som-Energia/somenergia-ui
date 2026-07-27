import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"

const SomStepperLinearProgress = (props) => {
  const {
    activeStep = 0,
    steps = {},
    stepsNum,
    showStepTitle = false,
    stepTitle,
  } = props

  const numberSteps = stepsNum || Object.keys(steps).length
  const currentStep = activeStep + 1

  return (
    <>
      <Typography color="secondary">
        {showStepTitle && stepTitle} {currentStep + "/" + numberSteps}
      </Typography>
      {numberSteps && (
        <LinearProgress
          variant="determinate"
          value={(currentStep / numberSteps) * 100}
          color="secondary"
          sx={{
            marginBottom: "65px",
            height: 6,
            borderRadius: "100px",
            backgroundColor: "secondary.extraDark",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "primary.mainOrange",
            },
          }}
        />
      )}
    </>
  )
}
export default SomStepperLinearProgress
