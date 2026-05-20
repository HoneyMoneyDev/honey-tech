import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Header from './Header'

function renderHeader() {
  return render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

describe('Header', () => {
  it('deve exibir a logo clicável', () => {
    renderHeader()
    const logo = screen.getByTestId('header-logo')
    expect(logo).toBeInTheDocument()
    expect(logo.tagName.toLowerCase()).toBe('a')
    expect(logo).toHaveAttribute('href', '#')
  })

  it('deve exibir os links de navegação no desktop', () => {
    renderHeader()
    const nav = screen.getByTestId('header-nav')
    expect(nav).toBeInTheDocument()
    const links = nav.querySelectorAll('a')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('deve exibir o botão hamburger', () => {
    renderHeader()
    expect(screen.getByTestId('hamburger-button')).toBeInTheDocument()
  })

  it('deve abrir o menu mobile ao clicar no hamburger', async () => {
    renderHeader()
    const btn = screen.getByTestId('hamburger-button')
    await userEvent.click(btn)
    expect(screen.getByTestId('mobile-menu')).toBeVisible()
  })

  it('deve fechar o menu mobile ao clicar em um link', async () => {
    renderHeader()
    await userEvent.click(screen.getByTestId('hamburger-button'))
    const mobileLinks = screen.getByTestId('mobile-menu').querySelectorAll('a')
    await userEvent.click(mobileLinks[0])
    expect(screen.getByTestId('mobile-menu')).not.toBeVisible()
  })

  it('deve ter link para a seção de contato', () => {
    renderHeader()
    const ctaLink = screen.getByTestId('header-cta')
    expect(ctaLink).toHaveAttribute('href', '#contato')
  })
})
