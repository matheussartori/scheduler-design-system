import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, type CheckboxProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
