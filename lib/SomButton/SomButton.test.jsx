import { ThemeProvider } from "@mui/material/styles"

import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"

import SomEnergiaTheme from "../SomEnergiaTheme"
import SomButton from "."

const renderWithTheme = (ui) =>
  render(<ThemeProvider theme={SomEnergiaTheme(false)}>{ui}</ThemeProvider>)

describe("SomButton component", () => {
  test("renders the label", () => {
    renderWithTheme(<SomButton label="Save" />)

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
  })

  test("calls onClick when clicked", () => {
    const onClick = vi.fn()
    renderWithTheme(<SomButton label="Save" onClick={onClick} />)

    fireEvent.click(screen.getByRole("button", { name: "Save" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test("primary uses the contained variant", () => {
    renderWithTheme(<SomButton primary label="Save" />)

    expect(screen.getByRole("button")).toHaveClass("MuiButton-contained")
  })

  test("secondary uses the outlined variant", () => {
    renderWithTheme(<SomButton label="Save" />)

    expect(screen.getByRole("button")).toHaveClass("MuiButton-outlined")
  })

  test("danger uses the error palette", () => {
    renderWithTheme(<SomButton danger label="Delete" />)

    expect(screen.getByRole("button")).toHaveClass("MuiButton-containedError")
  })

  test("renders disabled", () => {
    renderWithTheme(<SomButton disabled label="Save" />)

    expect(screen.getByRole("button")).toBeDisabled()
  })
})
