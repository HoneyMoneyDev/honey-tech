import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/GlobalStyle'
import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
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

type Story = StoryObj<typeof Hero>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
