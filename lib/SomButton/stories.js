import SomButton from "."

export default {
  title: "Base Components/SomButton",
  component: SomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
}

export const Secondary = {
  args: {
    label: "Button",
  },
}

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
}

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
}

export const Danger = {
  args: {
    danger: true,
    label: "Delete now",
  },
}

export const Disabled = {
  args: {
    primary: true,
    disabled: true,
    label: "Button",
  },
}
