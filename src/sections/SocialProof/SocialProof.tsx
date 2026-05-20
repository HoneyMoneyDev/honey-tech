import styled, { keyframes } from 'styled-components'
import { FiStar } from 'react-icons/fi'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  initials: string
}

interface Stat {
  value: string
  label: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ana Costa',
    role: 'CEO',
    company: 'Startup Fintech',
    quote:
      'A HoneyTech entregou nosso MVP em tempo recorde. A qualidade do código surpreendeu — limpo, bem documentado e fácil de evoluir. Recomendo sem hesitar.',
    initials: 'AC',
  },
  {
    name: 'Rafael Mendes',
    role: 'Product Manager',
    company: 'E-commerce Varejo',
    quote:
      'Comunicação impecável do início ao fim. Eles entenderam nossa dor, propuseram soluções criativas e entregaram além do esperado. Parceria que vale a pena.',
    initials: 'RM',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Fundadora',
    company: 'Plataforma EdTech',
    quote:
      'Precisávamos de uma solução robusta com prazo apertado. A equipe da HoneyTech foi precisa, proativa e manteve a gente atualizada em cada etapa.',
    initials: 'JF',
  },
]

const STATS: Stat[] = [
  { value: '12+', label: 'Projetos entregues' },
  { value: '5', label: 'Clientes ativos' },
  { value: '100%', label: 'No prazo' },
  { value: '3+', label: 'Anos de experiência' },
]

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bgSurface};
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`

const Header = styled.div`
  text-align: center;
  animation: ${fadeInUp} 0.5s ease both;
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

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.bgBody};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`

const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.bgBody};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const Stars = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
`

const Quote = styled.blockquote`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  flex: 1;

  &::before {
    content: '"';
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 0;
    vertical-align: -0.4em;
    margin-right: 2px;
  }

  &::after {
    content: '"';
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 0;
    vertical-align: -0.4em;
    margin-left: 2px;
  }
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffa500, #dbac22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  color: #121212;
  flex-shrink: 0;
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const AuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const AuthorRole = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
`

function SocialProof() {
  return (
    <Section id="prova-social">
      <Inner>
        <Header>
          <SectionTitle>
            O que nossos <span>clientes</span> dizem
          </SectionTitle>
          <Subtitle>Resultados reais de quem confiou na HoneyTech</Subtitle>
        </Header>

        <StatsRow>
          {STATS.map(({ value, label }) => (
            <StatCard key={label} data-testid="stat-item">
              <StatValue data-testid="stat-value">{value}</StatValue>
              <StatLabel data-testid="stat-label">{label}</StatLabel>
            </StatCard>
          ))}
        </StatsRow>

        <TestimonialsGrid>
          {TESTIMONIALS.map(({ name, role, company, quote, initials }) => (
            <TestimonialCard key={name} data-testid="testimonial-card">
              <Stars aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} size={14} fill="currentColor" />
                ))}
              </Stars>

              <Quote data-testid="testimonial-quote">{quote}</Quote>

              <Author>
                <Avatar aria-hidden="true">{initials}</Avatar>
                <AuthorInfo>
                  <AuthorName data-testid="testimonial-name">{name}</AuthorName>
                  <AuthorRole data-testid="testimonial-role">
                    {role} · {company}
                  </AuthorRole>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Inner>
    </Section>
  )
}

export default SocialProof
