import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur minima doloribus repudiandae aliquid dolore nam quibusdam et ex repellat odit, culpa, nemo quo, vero deserunt fuga sunt placeat delectus quaerat.'
  },
  argTypes: {
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
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
