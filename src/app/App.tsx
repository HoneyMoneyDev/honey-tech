import styled, { keyframes } from 'styled-components'
import BeeLogo from '../assets/BeeLogo'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgBody};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  animation: ${fadeIn} 0.8s ease both;
`

const LogoWrapper = styled.div`
  filter: drop-shadow(0 4px 24px rgba(219, 172, 34, 0.35));
`

const BrandName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -1px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 480px;
  line-height: 1.6;
`

const CTAButton = styled.a`
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transition};
  min-height: 44px;
  line-height: 44px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const Divider = styled.div`
  width: 48px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`

function App() {
  return (
    <Page>
      <Hero>
        <LogoWrapper>
          <BeeLogo size={120} />
        </LogoWrapper>
        <BrandName>
          Honey<span>Tech</span>
        </BrandName>
        <Divider />
        <Tagline>
          Soluções digitais que transformam ideias em produtos que funcionam de verdade.
        </Tagline>
        <CTAButton href="mailto:contato@honeytech.com.br">
          Fale conosco
        </CTAButton>
      </Hero>
    </Page>
  )
}

export default App
