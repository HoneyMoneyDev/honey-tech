import styled, { keyframes } from 'styled-components'
import { FiCheckCircle, FiCode, FiUsers, FiZap } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import BeeLogo from '../../assets/BeeLogo'

interface Differential {
  icon: IconType
  text: string
}

const DIFFERENTIALS: Differential[] = [
  { icon: FiCheckCircle, text: 'Entregas no prazo e com qualidade garantida' },
  { icon: FiCode, text: 'Código limpo, testado e fácil de manter' },
  { icon: FiUsers, text: 'Comunicação próxima e foco total no cliente' },
  { icon: FiZap, text: 'Soluções rápidas e escaláveis para o seu negócio' },
]

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
`

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bgBody};
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Mission = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin: 0;
`

const DifferentialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const DifferentialItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: rgba(255, 165, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary};
`

const DifferentialText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`

const VisualCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: -1;
  }
`

const VisualCard = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, #1e1e1e, #121212);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 80px rgba(219, 172, 34, 0.12);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 220px;
    height: 220px;
  }
`

const FloatingBee = styled.div`
  animation: ${float} 4s ease-in-out infinite;
`

const RingOuter = styled.div`
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  opacity: 0.4;
`

const RingInner = styled.div`
  position: absolute;
  inset: 16px;
  border-radius: 50%;
  border: 1px solid rgba(255, 165, 0, 0.15);
`

function About() {
  return (
    <Section id="sobre">
      <Inner>
        <TextCol>
          <SectionTitle>
            Sobre a <span>HoneyTech</span>
          </SectionTitle>

          <Mission data-testid="about-mission">
            Somos uma empresa de soluções digitais apaixonada por transformar ideias em
            produtos que fazem diferença. Trabalhamos com tecnologia de ponta, processos
            ágeis e atenção cuidadosa a cada detalhe — do primeiro protótipo ao deploy
            em produção.
          </Mission>

          <DifferentialList>
            {DIFFERENTIALS.map(({ icon: Icon, text }) => (
              <DifferentialItem key={text} data-testid="about-differential">
                <IconWrapper data-testid="differential-icon" aria-hidden="true">
                  <Icon size={18} />
                </IconWrapper>
                <DifferentialText data-testid="differential-text">
                  {text}
                </DifferentialText>
              </DifferentialItem>
            ))}
          </DifferentialList>
        </TextCol>

        <VisualCol>
          <VisualCard data-testid="about-visual">
            <RingOuter />
            <RingInner />
            <FloatingBee>
              <BeeLogo size={140} />
            </FloatingBee>
          </VisualCard>
        </VisualCol>
      </Inner>
    </Section>
  )
}

export default About
