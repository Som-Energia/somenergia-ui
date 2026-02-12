import SummaryDisplay from "./SummaryDisplay";

export default {
  title: 'Base Components/SummaryDisplay',
  component: SummaryDisplay,
  tags: ['autodocs'],
  argTypes: {
    title: { type: 'string' },
    value: { type: 'number' },
    valueUnit: {
      type: 'string'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    }
  }
}

export const Default = {
  args: {
    value: 50.23,
    valueUnit: 'TB',
    title: 'of 120TB',
    description: 'SSD usage',
  }
}

export const SecondaryColor = {
  args: {
    value: 50.23,
    valueUnit: 'TB',
    title: 'of 120TB',
    description: 'SSD usage',
    color: 'secondary'
  }

}
