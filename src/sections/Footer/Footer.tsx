import styled from 'styled-components'
import { FiLinkedin, FiInstagram, FiGithub, FiMail } from 'react-icons/fi'
import BeeLogo from '../../assets/BeeLogo'

const FooterEl = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgSurface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const BrandName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transition},
              border-color ${({ theme }) => theme.transition},
              background-color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(255, 165, 0, 0.1);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.4);
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`

const LegalLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function Footer() {
  const year = new Date().getFullYear()

  return (
    <FooterEl>
      <Inner>
        <Top>
          <Brand data-testid="footer-brand">
            <BeeLogo size={32} />
            <BrandName>
              Honey<em>Tech</em>
            </BrandName>
          </Brand>

          <ContactLink href="mailto:contato@honeytech.com.br">
            <FiMail size={16} />
            contato@honeytech.com.br
          </ContactLink>

          <SocialLinks>
            <SocialLink
              href="https://linkedin.com/company/honeytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/honeytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram size={18} />
            </SocialLink>
            <SocialLink
              href="https://github.com/HoneyMoneyDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </SocialLink>
          </SocialLinks>
        </Top>

        <Divider />

        <Bottom>
          <Copyright data-testid="footer-copyright">
            © {year} HoneyTech. Todos os direitos reservados.
          </Copyright>
          <LegalLink href="/politica-de-privacidade">
            Política de Privacidade
          </LegalLink>
        </Bottom>
      </Inner>
    </FooterEl>
  )
}

export default Footer
