import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import About from './About'

function renderAbout() {
  return render(
    <ThemeProvider theme={theme}>
      <About />
    </ThemeProvider>
  )
}

describe('About', () => {
  it('deve exibir o título da seção', () => {
    renderAbout()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('deve exibir o texto de missão', () => {
    renderAbout()
    expect(screen.getByTestId('about-mission')).toBeInTheDocument()
    expect(screen.getByTestId('about-mission').textContent?.length).toBeGreaterThan(20)
  })

  it('deve exibir no mínimo 3 diferenciais', () => {
    renderAbout()
    const items = screen.getAllByTestId('about-differential')
    expect(items.length).toBeGreaterThanOrEqual(3)
  })

  it('deve exibir ícone e texto em cada diferencial', () => {
    renderAbout()
    const items = screen.getAllByTestId('about-differential')
    items.forEach((item) => {
      expect(item.querySelector('[data-testid="differential-icon"]')).toBeInTheDocument()
      expect(item.querySelector('[data-testid="differential-text"]')?.textContent?.length).toBeGreaterThan(0)
    })
  })

  it('deve exibir o elemento visual da seção', () => {
    renderAbout()
    expect(screen.getByTestId('about-visual')).toBeInTheDocument()
  })
})
