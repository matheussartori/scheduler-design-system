import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
}
