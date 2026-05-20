import styled, { keyframes } from 'styled-components'
import BeeLogo from '../../assets/BeeLogo'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bgBody};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 680px;
  width: 100%;
  animation: ${fadeInUp} 0.8s ease both;
`

const LogoWrapper = styled.div`
  filter: drop-shadow(0 4px 24px rgba(219, 172, 34, 0.35));
`

const BrandName = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.5px;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Headline = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.1;
  letter-spacing: -1px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`

const Subheadline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

const Divider = styled.div`
  width: 48px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transition};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.4);
  }
`

function Hero() {
  return (
    <Section>
      <Content>
        <LogoWrapper>
          <BeeLogo size={100} aria-label="HoneyTech logo" />
        </LogoWrapper>

        <BrandName>
          Honey<em>Tech</em>
        </BrandName>

        <Headline>
          Transformamos ideias em produtos digitais reais.
        </Headline>

        <Divider />

        <Subheadline data-testid="hero-subheadline">
          Desenvolvimento web e mobile com foco em qualidade,
          prazo e resultado para o seu negócio.
        </Subheadline>

        <CTAButton href="#contato">
          Solicitar orçamento
        </CTAButton>
      </Content>
    </Section>
  )
}

export default Hero
