import type { Meta, StoryObj } from '@storybook/react'
import WhatsAppButton from './WhatsAppButton'

const meta: Meta<typeof WhatsAppButton> = {
  title: 'Shared/WhatsAppButton',
  component: WhatsAppButton,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof WhatsAppButton>

export const Default: Story = {}
