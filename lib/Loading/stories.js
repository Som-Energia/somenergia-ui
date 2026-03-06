import Loading from '.'

export default {
  title: 'Base Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  argTypes: {
    description: {
      control: 'text'
    }
  },
}
