import type { Meta, StoryObj } from '@storybook/react'
import { Box, type BoxProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span style={{ color: 'white' }}>Testando o elemento Box</span>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}
