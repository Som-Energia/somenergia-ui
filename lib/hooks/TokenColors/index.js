import { useTheme } from "@mui/material/styles"

import tokens from "@somenergia/tokens"

/**
Hook returning the token colors of the active MUI color mode
(tokens.color.light or tokens.color.dark).
*/
export default function useTokenColors() {
  const theme = useTheme()
  return tokens.color[theme.palette.mode === "dark" ? "dark" : "light"]
}
