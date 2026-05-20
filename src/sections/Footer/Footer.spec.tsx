import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Footer from './Footer'

function renderFooter() {
  return render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  )
}

describe('Footer', () => {
  it('deve exibir o nome da marca', () => {
    renderFooter()
    expect(screen.getByTestId('footer-brand')).toBeInTheDocument()
  })

  it('deve exibir link de e-mail de contato', () => {
    renderFooter()
    const emailLink = screen.getByRole('link', { name: /contato@honeytech/i })
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })

  it('deve exibir links de redes sociais', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
  })

  it('deve exibir link de política de privacidade', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /política de privacidade/i })).toBeInTheDocument()
  })

  it('deve exibir copyright com o ano atual', () => {
    renderFooter()
    const year = new Date().getFullYear().toString()
    expect(screen.getByTestId('footer-copyright').textContent).toContain(year)
  })
})
