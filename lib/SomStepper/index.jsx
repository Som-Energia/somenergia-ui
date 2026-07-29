import { useCallback } from "react"

import { Grid2 as Grid } from "@mui/material"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"

import NextButton from "../Buttons/NextButton"
import PrevButton from "../Buttons/PrevButton"

const SomStepper = (props) => {
  const {
    activeStep = 0,
    setActiveStep,
    steps = [],
    stepTitle,
    showStepProgress = true,
    showStepTitle = false,
    disableNext = true,
    nextButton,
    nextButtonLabel = "Next",
    prevButtonLabel = "Previous",
    finishButton = null,
    hidePreviousButton = false,
    children,
  } = props

  const nextStep = useCallback(() => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length))
  }, [steps, setActiveStep])

  const prevStep = useCallback(() => {
    setActiveStep((prev) => Math.max(0, prev - 1))
  }, [setActiveStep])

  const currentStepNum =
    activeStep >= steps.length ? steps.length : activeStep + 1
  const maxStepsNum = steps.length
  const lastStepIndex = steps.length - 1

  return (
    <>
      {showStepProgress && steps.length > 0 && (
        <Typography color="secondary">
          {showStepTitle && stepTitle}{" "}
          {steps.length > 0 && currentStepNum + "/" + maxStepsNum}
        </Typography>
      )}
      {showStepProgress && steps.length > 0 && (
        <>
          <LinearProgress
            variant="determinate"
            value={(currentStepNum / maxStepsNum) * 100}
            color="accent"
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
        </>
      )}

      {children ?? steps.at(activeStep) ?? null}

      <Grid
        container
        direction="row-reverse"
        rowSpacing={2}
        sx={{
          marginTop: "2rem",
          justifyContent:
            activeStep === lastStepIndex && finishButton && hidePreviousButton
              ? "center"
              : "space-between",
          alignItems: "center",
        }}>
        {!hidePreviousButton &&
          activeStep > 0 &&
          activeStep <= lastStepIndex && (
            <Grid item size={{ sm: 2, xs: 12 }}>
              <PrevButton onClick={() => prevStep()}>
                {prevButtonLabel}
              </PrevButton>
            </Grid>
          )}

        {activeStep < lastStepIndex && (
          <Grid
            item
            size={{ sm: activeStep === lastStepIndex ? 3 : 2, xs: 12 }}
            order={-1}>
            {nextButton || (
              <NextButton disabled={disableNext} onClick={() => nextStep()}>
                {nextButtonLabel}
              </NextButton>
            )}
          </Grid>
        )}

        {activeStep === lastStepIndex && (
          <Grid item size={{ sm: 3, xs: 12 }} order={-1}>
            {finishButton}
          </Grid>
        )}
      </Grid>
    </>
  )
}
export default SomStepper
