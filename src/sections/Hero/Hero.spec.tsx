import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Hero from './Hero'

function renderHero() {
  return render(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  )
}

describe('Hero', () => {
  it('deve exibir o headline principal', () => {
    renderHero()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('deve exibir o subheadline', () => {
    renderHero()
    expect(screen.getByTestId('hero-subheadline')).toBeInTheDocument()
  })

  it('deve exibir a logo', () => {
    renderHero()
    expect(screen.getByRole('img', { name: /honeytech logo/i })).toBeInTheDocument()
  })

  it('deve exibir o CTA primário com link funcional', () => {
    renderHero()
    const cta = screen.getByRole('link', { name: /solicitar orçamento/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href')
  })

  it('deve ter o headline com no máximo 10 palavras', () => {
    renderHero()
    const headline = screen.getByRole('heading', { level: 1 })
    const wordCount = headline.textContent?.trim().split(/\s+/).length ?? 0
    expect(wordCount).toBeLessThanOrEqual(10)
  })
})
