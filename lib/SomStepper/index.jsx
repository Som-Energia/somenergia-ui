import { useCallback } from "react"

import { Grid2 as Grid } from "@mui/material"

import NextButton from "../Buttons/NextButton"
import PrevButton from "../Buttons/PrevButton"

const SomStepper = (props) => {
  const {
    activeStep = 0,
    setActiveStep,
    steps = [],
    disableNext = true,
    nextButton,
    nextButtonLabel = "Next",
    prevButtonLabel = "Previous",
    finishButton = null,
    hidePrevButton = false,
    children,
  } = props

  const nextStep = useCallback(() => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length))
  }, [steps, setActiveStep])

  const prevStep = useCallback(() => {
    setActiveStep((prev) => Math.max(0, prev - 1))
  }, [setActiveStep])

  const lastStepIndex = steps.length - 1

  return (
    <>
      {children ?? steps.at(activeStep) ?? null}

      <Grid
        container
        direction="row-reverse"
        rowSpacing={2}
        sx={{
          marginTop: "2rem",
          justifyContent:
            activeStep === lastStepIndex && finishButton && hidePrevButton
              ? "center"
              : "space-between",
          alignItems: "center",
        }}>
        {!hidePrevButton && activeStep > 0 && activeStep <= lastStepIndex && (
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
