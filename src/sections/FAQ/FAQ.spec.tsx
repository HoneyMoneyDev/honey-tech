import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import FAQ from './FAQ'

function renderFAQ() {
  return render(
    <ThemeProvider theme={theme}>
      <FAQ />
    </ThemeProvider>
  )
}

describe('FAQ', () => {
  it('deve exibir o título da seção', () => {
    renderFAQ()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('deve exibir no mínimo 4 perguntas', () => {
    renderFAQ()
    const items = screen.getAllByTestId('faq-item')
    expect(items.length).toBeGreaterThanOrEqual(4)
  })

  it('deve exibir as perguntas fechadas por padrão (respostas ocultas)', () => {
    renderFAQ()
    const answers = screen.getAllByTestId('faq-answer')
    answers.forEach((answer) => {
      expect(answer).not.toBeVisible()
    })
  })

  it('deve abrir a resposta ao clicar na pergunta', async () => {
    renderFAQ()
    const buttons = screen.getAllByTestId('faq-trigger')
    await userEvent.click(buttons[0])
    expect(screen.getAllByTestId('faq-answer')[0]).toBeVisible()
  })

  it('deve fechar a resposta ao clicar novamente', async () => {
    renderFAQ()
    const buttons = screen.getAllByTestId('faq-trigger')
    await userEvent.click(buttons[0])
    await userEvent.click(buttons[0])
    expect(screen.getAllByTestId('faq-answer')[0]).not.toBeVisible()
  })

  it('deve fechar o item aberto ao abrir outro', async () => {
    renderFAQ()
    const buttons = screen.getAllByTestId('faq-trigger')
    await userEvent.click(buttons[0])
    await userEvent.click(buttons[1])
    expect(screen.getAllByTestId('faq-answer')[0]).not.toBeVisible()
    expect(screen.getAllByTestId('faq-answer')[1]).toBeVisible()
  })
})
