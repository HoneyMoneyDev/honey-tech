import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Services from './Services'

function renderServices() {
  return render(
    <ThemeProvider theme={theme}>
      <Services />
    </ThemeProvider>
  )
}

describe('Services', () => {
  it('deve exibir o título da seção', () => {
    renderServices()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('deve exibir no mínimo 3 cards de serviço', () => {
    renderServices()
    const cards = screen.getAllByTestId('service-card')
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })

  it('deve exibir título e descrição em cada card', () => {
    renderServices()
    const titles = screen.getAllByTestId('service-title')
    const descriptions = screen.getAllByTestId('service-description')
    expect(titles.length).toBeGreaterThanOrEqual(3)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
    titles.forEach((title) => expect(title.textContent).not.toBe(''))
    descriptions.forEach((desc) => expect(desc.textContent).not.toBe(''))
  })

  it('deve exibir ícone em cada card', () => {
    renderServices()
    const icons = screen.getAllByTestId('service-icon')
    expect(icons.length).toBeGreaterThanOrEqual(3)
  })
})
