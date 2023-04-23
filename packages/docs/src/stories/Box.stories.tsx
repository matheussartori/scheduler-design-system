import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, type BoxProps } from '@matheussartori/scheduler-design-system-react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur minima doloribus repudiandae aliquid dolore nam quibusdam et ex repellat odit, culpa, nemo quo, vero deserunt fuga sunt placeat delectus quaerat.
        </Text>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}
