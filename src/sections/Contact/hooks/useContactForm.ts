import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface Fields {
  name: string
  email: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (!fields.name.trim()) errors.name = 'Nome é obrigatório.'
  if (!fields.email.trim()) {
    errors.email = 'E-mail é obrigatório.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'E-mail inválido.'
  }
  if (!fields.message.trim()) errors.message = 'Mensagem é obrigatória.'
  return errors
}

function useContactForm() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      // Ponto de integração: substituir pelo endpoint real (Formspree, API, etc.)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return { fields, errors, status, handleChange, handleSubmit }
}

export default useContactForm
