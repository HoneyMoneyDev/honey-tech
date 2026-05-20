import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Contact from './Contact'

function renderContact() {
  return render(
    <ThemeProvider theme={theme}>
      <Contact />
    </ThemeProvider>
  )
}

describe('Contact', () => {
  it('deve exibir os três campos do formulário', () => {
    renderContact()
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument()
  })

  it('deve exibir o botão de envio', () => {
    renderContact()
    expect(screen.getByRole('button', { name: /solicitar orçamento/i })).toBeInTheDocument()
  })

  it('deve exibir erros de validação ao submeter vazio', async () => {
    renderContact()
    await userEvent.click(screen.getByRole('button', { name: /solicitar orçamento/i }))
    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument()
    expect(await screen.findByText(/e-mail é obrigatório/i)).toBeInTheDocument()
    expect(await screen.findByText(/mensagem é obrigatória/i)).toBeInTheDocument()
  })

  it('deve exibir mensagem de sucesso após envio válido', async () => {
    renderContact()
    await userEvent.type(screen.getByLabelText(/nome/i), 'Gustavo')
    await userEvent.type(screen.getByLabelText(/e-mail/i), 'gustavo@email.com')
    await userEvent.type(screen.getByLabelText(/mensagem/i), 'Olá, gostaria de um orçamento.')
    await userEvent.click(screen.getByRole('button', { name: /solicitar orçamento/i }))
    await waitFor(() =>
      expect(screen.getByTestId('contact-success')).toBeInTheDocument(),
      { timeout: 2000 }
    )
  })
})
