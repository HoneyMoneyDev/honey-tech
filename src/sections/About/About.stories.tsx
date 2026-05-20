import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/GlobalStyle'
import About from './About'

const meta: Meta<typeof About> = {
  title: 'Sections/About',
  component: About,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof About>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
