import styled from 'styled-components'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import useContactForm from './hooks/useContactForm'

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bgSurface};
`

const Inner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const Header = styled.div`
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 ${({ theme }) => theme.spacing.xs};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const baseInputStyles = `
  width: 100%;
  background-color: #121212;
  border: 1px solid;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.15);
  }
`

const Input = styled.input<{ $hasError?: boolean }>`
  ${baseInputStyles}
  padding: 16px;
  min-height: 44px;
  border-color: ${({ $hasError, theme }) => $hasError ? theme.colors.error : theme.colors.border};

  &:focus {
    border-color: ${({ $hasError, theme }) => $hasError ? theme.colors.error : theme.colors.primary};
  }
`

const Textarea = styled.textarea<{ $hasError?: boolean }>`
  ${baseInputStyles}
  padding: 16px;
  min-height: 140px;
  resize: vertical;
  border-color: ${({ $hasError, theme }) => $hasError ? theme.colors.error : theme.colors.border};

  &:focus {
    border-color: ${({ $hasError, theme }) => $hasError ? theme.colors.error : theme.colors.primary};
  }
`

const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error};
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition};
  align-self: flex-start;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.4);
  }
`

const SuccessBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.success};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`

function Contact() {
  const { fields, errors, status, handleChange, handleSubmit } = useContactForm()

  return (
    <Section id="contato">
      <Inner>
        <Header>
          <SectionTitle>
            Fale com a <span>HoneyTech</span>
          </SectionTitle>
          <SectionSubtitle>
            Conte seu projeto e entraremos em contato em até 24 horas.
          </SectionSubtitle>
        </Header>

        {status === 'success' ? (
          <SuccessBox data-testid="contact-success">
            <FiCheckCircle size={20} />
            Mensagem enviada! Em breve entraremos em contato.
          </SuccessBox>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <Field>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={fields.name}
                onChange={handleChange}
                $hasError={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <ErrorMessage id="name-error" role="alert">{errors.name}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={fields.email}
                onChange={handleChange}
                $hasError={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <ErrorMessage id="email-error" role="alert">{errors.email}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Descreva seu projeto ou dúvida..."
                value={fields.message}
                onChange={handleChange}
                $hasError={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <ErrorMessage id="message-error" role="alert">{errors.message}</ErrorMessage>
              )}
            </Field>

            <SubmitButton type="submit" disabled={status === 'loading'}>
              <FiSend size={16} />
              {status === 'loading' ? 'Enviando...' : 'Solicitar orçamento'}
            </SubmitButton>
          </Form>
        )}
      </Inner>
    </Section>
  )
}

export default Contact
