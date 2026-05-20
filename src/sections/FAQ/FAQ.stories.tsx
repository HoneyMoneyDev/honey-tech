import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/GlobalStyle'
import FAQ from './FAQ'

const meta: Meta<typeof FAQ> = {
  title: 'Sections/FAQ',
  component: FAQ,
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

type Story = StoryObj<typeof FAQ>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
