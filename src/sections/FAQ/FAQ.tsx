import { useState } from 'react'
import styled, { css } from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

const ITEMS: FAQItem[] = [
  {
    question: 'Quanto tempo leva para desenvolver um projeto?',
    answer:
      'Depende do escopo, mas projetos de landing page ou site institucional ficam prontos em 2 a 4 semanas. Sistemas web completos ou aplicativos móveis levam de 6 a 16 semanas. Em todos os casos, alinhamos o prazo com você antes de começar e mantemos atualizações frequentes ao longo do projeto.',
  },
  {
    question: 'Qual é o investimento para contratar a HoneyTech?',
    answer:
      'O valor varia conforme complexidade, funcionalidades e prazo. Trabalhamos tanto com projetos fechados (preço fixo) quanto com alocação de horas. Entre em contato para receber um orçamento personalizado — sem compromisso. Prezamos pela transparência e não há cobranças surpresa.',
  },
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer:
      'Seguimos um processo ágil em 4 etapas: (1) Descoberta — entendemos sua dor e objetivos; (2) Planejamento — definimos escopo, tecnologias e cronograma; (3) Desenvolvimento — entregas incrementais com feedback contínuo; (4) Deploy e suporte — publicamos e acompanhamos o lançamento.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer:
      'Atuamos nas tecnologias mais presentes no mercado como C#, PHP, Java, Kotlin, JavaScript, incluindo frameworks como Nest.js, Next.js, React, React Native e Vue.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer:
      'Sim. Incluímos um período de garantia de 30 dias de manutenção e ajustes de acordo com o escopo do projeto contratado sem custo. Também oferecemos planos de manutenção mensal.',
  },
]

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bgBody};
`

const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`

const Header = styled.div`
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`

const List = styled.dl`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgSurface};
  transition: border-color ${({ theme }) => theme.transition};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const Trigger = styled.dt<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  user-select: none;
  list-style: none;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
    text-align: left;
    cursor: pointer;

    &:focus-visible {
      outline: none;
    }
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform ${({ theme }) => theme.transition};
    ${({ $open }) =>
      $open &&
      css`
        transform: rotate(180deg);
      `}
  }
`

const Answer = styled.dd<{ $open: boolean }>`
  margin: 0;
  max-height: ${({ $open }) => ($open ? '400px' : '0')};
  overflow: hidden;
  transition: max-height 0.35s ease;
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};

  p {
    padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.8;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding-top: ${({ theme }) => theme.spacing.md};
  }
`

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Section id="faq">
      <Inner>
        <Header>
          <SectionTitle>
            Perguntas <span>frequentes</span>
          </SectionTitle>
          <Subtitle>Tudo que você precisa saber antes de começar</Subtitle>
        </Header>

        <List>
          {ITEMS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            return (
              <Item key={question} data-testid="faq-item">
                <Trigger $open={isOpen}>
                  <button
                    data-testid="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggle(index)}
                  >
                    {question}
                    <FiChevronDown size={18} aria-hidden="true" />
                  </button>
                </Trigger>
                <Answer
                  id={`faq-answer-${index}`}
                  $open={isOpen}
                  data-testid="faq-answer"
                  aria-hidden={!isOpen}
                >
                  <p>{answer}</p>
                </Answer>
              </Item>
            )
          })}
        </List>
      </Inner>
    </Section>
  )
}

export default FAQ
