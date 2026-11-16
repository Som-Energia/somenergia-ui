import { I18nextProvider, initReactI18next } from "react-i18next"

import { ThemeProvider } from "@mui/material/styles"

import { fireEvent, render, screen } from "@testing-library/react"
import i18next from "i18next"
import { vi } from "vitest"

import { registerSomEnergiaI18n } from "../i18n"
import SomEnergiaTheme from "../SomEnergiaTheme"
import SomHeader from "."

const i18n = i18next.createInstance()
i18n.use(initReactI18next).init({ lng: "es", resources: {} })
registerSomEnergiaI18n(i18n)

const renderHeader = (props) =>
  render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={SomEnergiaTheme(false)}>
        <SomHeader {...props} />
      </ThemeProvider>
    </I18nextProvider>,
  )

describe("SomHeader component", () => {
  test("shows the Som Energia logo", () => {
    renderHeader()

    expect(screen.getByRole("img", { name: "Som Energia" })).toBeInTheDocument()
  })

  test("shows the title when given", () => {
    renderHeader({ title: "Oficina Virtual" })

    expect(
      screen.getByRole("heading", { name: "Oficina Virtual" }),
    ).toBeInTheDocument()
  })

  test("logged out shows log in and sign up", () => {
    const onLogin = vi.fn()
    const onCreateAccount = vi.fn()
    renderHeader({ onLogin, onCreateAccount })

    fireEvent.click(screen.getByRole("button", { name: "Inicia sesión" }))
    fireEvent.click(screen.getByRole("button", { name: "Regístrate" }))
    expect(onLogin).toHaveBeenCalledTimes(1)
    expect(onCreateAccount).toHaveBeenCalledTimes(1)
  })

  test("logged in greets the user and shows log out", () => {
    const onLogout = vi.fn()
    renderHeader({ user: { name: "Jane Doe" }, onLogout })

    expect(screen.getByText("Jane Doe")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: "Cierra sesión" }))
    expect(onLogout).toHaveBeenCalledTimes(1)
  })

  test("hides actions without a handler", () => {
    renderHeader()

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})
