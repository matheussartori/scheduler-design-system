import type { Meta, StoryObj } from '@storybook/react'
import { Heading, type HeadingProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title'
  },
  size: {
    options: [
      'xxs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '4xl',
      '5xl'
    ],
    control: {
      type: 'inline-radio'
    }
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  }
}
