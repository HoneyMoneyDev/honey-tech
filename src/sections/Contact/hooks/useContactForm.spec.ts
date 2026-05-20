import { renderHook, act } from '@testing-library/react'
import useContactForm from './useContactForm'

describe('useContactForm', () => {
  it('deve iniciar com campos vazios e status idle', () => {
    const { result } = renderHook(() => useContactForm())
    expect(result.current.fields.name).toBe('')
    expect(result.current.fields.email).toBe('')
    expect(result.current.fields.message).toBe('')
    expect(result.current.status).toBe('idle')
  })

  it('deve atualizar o campo name ao chamar handleChange', () => {
    const { result } = renderHook(() => useContactForm())
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Gustavo' } } as React.ChangeEvent<HTMLInputElement>)
    })
    expect(result.current.fields.name).toBe('Gustavo')
  })

  it('deve retornar erros quando submeter com campos vazios', async () => {
    const { result } = renderHook(() => useContactForm())
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent)
    })
    expect(result.current.errors.name).toBeTruthy()
    expect(result.current.errors.email).toBeTruthy()
    expect(result.current.errors.message).toBeTruthy()
  })

  it('deve retornar erro de e-mail inválido', async () => {
    const { result } = renderHook(() => useContactForm())
    act(() => {
      result.current.handleChange({ target: { name: 'email', value: 'nao-e-email' } } as React.ChangeEvent<HTMLInputElement>)
    })
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent)
    })
    expect(result.current.errors.email).toBeTruthy()
  })

  it('deve definir status success após submit válido', async () => {
    const { result } = renderHook(() => useContactForm())
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Gustavo' } } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange({ target: { name: 'email', value: 'gustavo@email.com' } } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange({ target: { name: 'message', value: 'Olá, gostaria de um orçamento.' } } as React.ChangeEvent<HTMLInputElement>)
    })
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent)
    })
    expect(result.current.status).toBe('success')
  })
})
