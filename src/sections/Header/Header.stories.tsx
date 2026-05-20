import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/GlobalStyle'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
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

type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
