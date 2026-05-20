import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'
import WhatsAppButton from './WhatsAppButton'

const WHATSAPP_URL =
  'https://wa.me/5541991892409?text=Ol%C3%A1%21+Vim+pelo+site+da+HoneyTech+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+e+solicitar+um+or%C3%A7amento.'

function renderWithTheme() {
  return render(
    <ThemeProvider theme={theme}>
      <WhatsAppButton />
    </ThemeProvider>
  )
}

describe('WhatsAppButton', () => {
  it('deve renderizar o link com aria-label acessível', () => {
    renderWithTheme()
    expect(
      screen.getByRole('link', { name: /fale conosco pelo whatsapp/i })
    ).toBeInTheDocument()
  })

  it('deve apontar para a URL correta do WhatsApp', () => {
    renderWithTheme()
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute(
      'href',
      WHATSAPP_URL
    )
  })

  it('deve abrir em nova aba', () => {
    renderWithTheme()
    const link = screen.getByRole('link', { name: /whatsapp/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
