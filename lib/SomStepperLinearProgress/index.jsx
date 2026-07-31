import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"

const SomStepperLinearProgress = (props) => {
  const { totalSteps, currentStep, showStepTitle = false, stepTitle } = props

  return (
    <>
      {totalSteps > 0 && (
        <Typography color="secondary">
          {showStepTitle && stepTitle}{" "}
          {Number(currentStep + 1) + "/" + totalSteps}
        </Typography>
      )}
      {totalSteps > 0 && (
        <LinearProgress
          variant="determinate"
          value={((currentStep + 1) / totalSteps) * 100}
          color="secondary"
          sx={{
            marginBottom: "65px",
            height: 6,
            borderRadius: "100px",
            backgroundColor: "text.primary",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "accent.main",
            },
          }}
        />
      )}
    </>
  )
}
export default SomStepperLinearProgress
