import tokens from "@somenergia/design-tokens"

import { addons } from "@storybook/manager-api"
import { create } from "@storybook/theming/create"

const color = tokens.color.light

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Som Energia UI",
    brandUrl: "https://github.com/Som-Energia/somenergia-ui",
    brandImage: "./brand/logos/logo.svg",
    brandTarget: "_blank",
    fontBase: tokens.font.family,
    fontCode: tokens.font.familyMono,
    colorPrimary: color.text,
    colorSecondary: color.success,
    appBg: color.background,
    appContentBg: color.surface,
    appBorderColor: color.border,
    appBorderRadius: parseFloat(tokens.radius.sm) * 16,
    textColor: color.text,
    textMutedColor: color.textMuted,
    barBg: color.surface,
    barSelectedColor: color.success,
    barHoverColor: color.success,
  }),
})
