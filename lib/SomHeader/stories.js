import { fn } from "@storybook/test"

import SomHeader from "."

export default {
  title: "Base Components/SomHeader",
  component: SomHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
}

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
}

export const LoggedOut = {}

export const WithTitle = {
  args: {
    title: "Oficina Virtual",
  },
}
