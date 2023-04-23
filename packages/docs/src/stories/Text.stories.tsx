import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur minima doloribus repudiandae aliquid dolore nam quibusdam et ex repellat odit, culpa, nemo quo, vero deserunt fuga sunt placeat delectus quaerat.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
