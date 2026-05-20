import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import SocialProof from './SocialProof'

function renderSocialProof() {
  return render(
    <ThemeProvider theme={theme}>
      <SocialProof />
    </ThemeProvider>
  )
}

describe('SocialProof', () => {
  it('deve exibir o título da seção', () => {
    renderSocialProof()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('deve exibir no mínimo 2 depoimentos', () => {
    renderSocialProof()
    const testimonials = screen.getAllByTestId('testimonial-card')
    expect(testimonials.length).toBeGreaterThanOrEqual(2)
  })

  it('deve exibir nome e cargo em cada depoimento', () => {
    renderSocialProof()
    const names = screen.getAllByTestId('testimonial-name')
    const roles = screen.getAllByTestId('testimonial-role')
    expect(names.length).toBeGreaterThanOrEqual(2)
    expect(roles.length).toBeGreaterThanOrEqual(2)
    names.forEach((name) => expect(name.textContent?.length).toBeGreaterThan(0))
    roles.forEach((role) => expect(role.textContent?.length).toBeGreaterThan(0))
  })

  it('deve exibir o texto do depoimento com aspas', () => {
    renderSocialProof()
    const quotes = screen.getAllByTestId('testimonial-quote')
    expect(quotes.length).toBeGreaterThanOrEqual(2)
    quotes.forEach((quote) => expect(quote.textContent?.length).toBeGreaterThan(20))
  })

  it('deve exibir números de impacto', () => {
    renderSocialProof()
    const stats = screen.getAllByTestId('stat-item')
    expect(stats.length).toBeGreaterThanOrEqual(3)
  })

  it('deve exibir valor e rótulo em cada número de impacto', () => {
    renderSocialProof()
    const values = screen.getAllByTestId('stat-value')
    const labels = screen.getAllByTestId('stat-label')
    values.forEach((v) => expect(v.textContent?.length).toBeGreaterThan(0))
    labels.forEach((l) => expect(l.textContent?.length).toBeGreaterThan(0))
  })
})
