import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  args: { onClick: fn() },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Clique aqui',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Saiba mais',
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Indisponível',
    disabled: true,
  },
}
