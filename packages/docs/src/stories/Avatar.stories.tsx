import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, type AvatarProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/matheussartori.png',
    alt: 'Matheus Sartori'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
