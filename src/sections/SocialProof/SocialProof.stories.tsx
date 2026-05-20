import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/GlobalStyle'
import SocialProof from './SocialProof'

const meta: Meta<typeof SocialProof> = {
  title: 'Sections/SocialProof',
  component: SocialProof,
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

type Story = StoryObj<typeof SocialProof>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
