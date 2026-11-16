import MuiButton from "@mui/material/Button"

import tokens from "@somenergia/design-tokens"

import PropTypes from "prop-types"

import useTokenColors from "../hooks/TokenColors"

const sizes = {
  small: {
    ...tokens.text.buttonS,
    padding: `${tokens.space[2]} ${tokens.space[4]}`,
  },
  medium: {
    ...tokens.text.buttonM,
    padding: `${tokens.space[3]} ${tokens.space[5]}`,
  },
  large: {
    ...tokens.text.bodyM,
    padding: `${tokens.space[3]} ${tokens.space[6]}`,
  },
}

/**
 * Som Energia button styled from @somenergia/design-tokens.
 * It follows the light and dark color modes of SomEnergiaTheme.
 */
function SomButton({
  primary = false,
  danger = false,
  size = "medium",
  label,
  ...props
}) {
  const color = useTokenColors()
  const filled = primary || danger
  const palette = danger ? "error" : "primary"

  return (
    <MuiButton
      type="button"
      variant={filled ? "contained" : "outlined"}
      color={palette}
      disableElevation
      sx={{
        ...sizes[size],
        minWidth: 0,
        borderRadius: tokens.radius.xl,
        textTransform: "none",
        "&::first-letter": { textTransform: "uppercase" },
        ...(filled
          ? {
              border: "1px solid transparent",
              "&:hover": { backgroundColor: `${palette}.dark` },
            }
          : {
              color: color.text,
              borderColor: color.borderStrong,
              "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderColor: "transparent",
              },
            }),
        "&:focus-visible": {
          outline: `2px solid ${color.focusRing}`,
          outlineOffset: "2px",
        },
      }}
      {...props}>
      {label}
    </MuiButton>
  )
}

SomButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Is this a destructive action? It takes precedence over primary.
   */
  danger: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Disables the button
   */
  disabled: PropTypes.bool,
}

export default SomButton
