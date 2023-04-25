import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, type TextAreaProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add a description'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
