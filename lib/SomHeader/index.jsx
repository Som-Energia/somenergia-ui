import { Trans } from "react-i18next"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Logo from "@somenergia/brand/logos/logo-mono.svg?react"
import tokens from "@somenergia/design-tokens"

import PropTypes from "prop-types"

import useTokenColors from "../hooks/TokenColors"
import { useTranslation } from "../i18n"
import SomButton from "../SomButton"

/**
 * Som Energia page header with the brand logo, an optional title and
 * the session actions. Actions without a handler are not shown.
 */
function SomHeader({ title, user = null, onLogin, onLogout, onCreateAccount }) {
  const { t } = useTranslation()
  const color = useTokenColors()

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: tokens.space[4],
        padding: `${tokens.space[4]} ${tokens.space[5]}`,
        borderBottom: `1px solid ${color.border}`,
        backgroundColor: "background.paper",
        color: color.text,
      }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: tokens.space[3] }}>
        <Logo
          role="img"
          aria-label="Som Energia"
          style={{ display: "block", height: "35px", width: "auto" }}
        />
        {title && (
          <Typography variant="h4" component="h1" sx={{ margin: 0 }}>
            {title}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: tokens.space[2] }}>
        {user ? (
          <>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", marginRight: tokens.space[2] }}>
              <Trans
                t={t}
                i18nKey="SOM_HEADER.WELCOME"
                values={{ name: user.name }}
                components={{ b: <b /> }}
              />
            </Typography>
            {onLogout && (
              <SomButton
                size="small"
                onClick={onLogout}
                label={t("SOM_HEADER.LOG_OUT")}
              />
            )}
          </>
        ) : (
          <>
            {onLogin && (
              <SomButton
                size="small"
                onClick={onLogin}
                label={t("SOM_HEADER.LOG_IN")}
              />
            )}
            {onCreateAccount && (
              <SomButton
                primary
                size="small"
                onClick={onCreateAccount}
                label={t("SOM_HEADER.SIGN_UP")}
              />
            )}
          </>
        )}
      </Box>
    </Box>
  )
}

SomHeader.propTypes = {
  /**
   * Optional application name shown next to the logo
   */
  title: PropTypes.string,
  /**
   * Logged in user, or null when logged out
   */
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  /**
   * Shows the log in button when logged out
   */
  onLogin: PropTypes.func,
  /**
   * Shows the log out button when logged in
   */
  onLogout: PropTypes.func,
  /**
   * Shows the sign up button when logged out
   */
  onCreateAccount: PropTypes.func,
}

export default SomHeader
