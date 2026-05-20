import styled from 'styled-components'
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'

interface Service {
  icon: IconType
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: FiMonitor,
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, sistemas e aplicações web modernas, rápidas e acessíveis.',
  },
  {
    icon: FiSmartphone,
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos iOS e Android nativos ou multiplataforma com foco em experiência do usuário.',
  },
  {
    icon: FiLayout,
    title: 'Design UI/UX',
    description: 'Interfaces intuitivas e visualmente consistentes que convertem visitantes em clientes.',
  },
  {
    icon: FiTrendingUp,
    title: 'Consultoria Digital',
    description: 'Arquitetura de software, estratégia de produto e apoio técnico para seu negócio crescer.',
  },
]

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bgBody};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin: 0 0 ${({ theme }) => theme.spacing.xs};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin: 0 0 ${({ theme }) => theme.spacing.xxl};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSurface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  transition: transform ${({ theme }) => theme.transition},
              box-shadow ${({ theme }) => theme.transition},
              border-color ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 165, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`

function Services() {
  return (
    <Section id="servicos">
      <SectionTitle>
        Nossos <span>Serviços</span>
      </SectionTitle>
      <SectionSubtitle>
        Soluções digitais do início ao fim, com tecnologia e atenção aos detalhes.
      </SectionSubtitle>
      <Grid>
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <Card key={title} data-testid="service-card">
            <IconWrapper data-testid="service-icon" aria-hidden="true">
              <Icon size={24} />
            </IconWrapper>
            <CardTitle data-testid="service-title">{title}</CardTitle>
            <CardDescription data-testid="service-description">
              {description}
            </CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default Services
