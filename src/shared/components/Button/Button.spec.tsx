import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('deve renderizar o label corretamente', () => {
    render(<Button label="Clique aqui" />)
    expect(screen.getByRole('button', { name: 'Clique aqui' })).toBeInTheDocument()
  })

  it('deve chamar onClick quando clicado', async () => {
    const handleClick = vi.fn()
    render(<Button label="Ação" onClick={handleClick} />)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('deve estar desabilitado quando disabled for true', () => {
    render(<Button label="Indisponível" disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('deve aplicar a classe da variante corretamente', () => {
    render(<Button label="Secundário" variant="secondary" />)
    expect(screen.getByRole('button')).toHaveClass('btn--secondary')
  })
})
