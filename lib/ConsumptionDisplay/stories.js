import dayjs from "dayjs"

import ConsumptionDisplay from "."

export default {
  title: "Energy components/ConsumptionDisplay",
  component: ConsumptionDisplay,
  tags: ["autodocs"],
  argTypes: {
    period: {
      control: { type: "select" },
      options: ["DAILY", "MONTHLY", "YEARLY"],
    },
    currentDate: { type: "date" },
    totalKwh: { type: "number" },
    compareDate: {
      type: "date",
    },
    compareTotalKwh: {
      type: "number",
    },
  },
}

const currentDate = dayjs().format("YYYY-MM-DD")
const compareDate = dayjs(currentDate).subtract(1, "day").format("YYYY-MM-DD")

export const Default = {
  args: {
    period: "DAILY",
    currentDate,
    totalKwh: 5,
  },
}

export const DefaultAndComparation = {
  args: {
    period: "DAILY",
    currentDate,
    totalKwh: 5,
    compareDate,
    compareTotalKwh: 6,
  },
}

export const OnlyComparation = {
  args: {
    period: "DAILY",
    compareDate,
    compareTotalKwh: 6,
  },
}
