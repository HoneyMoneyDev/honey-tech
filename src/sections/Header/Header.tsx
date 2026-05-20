import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import BeeLogo from '../../assets/BeeLogo'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#prova-social' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const Root = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  transition: background-color ${({ theme }) => theme.transition},
    backdrop-filter ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};

  ${({ $scrolled }) =>
    $scrolled
      ? css`
          background-color: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
        `
      : css`
          background-color: transparent;
        `}
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  flex-shrink: 0;
`

const BrandName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -1px;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #121212;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.transition};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transition};
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`

const MobileMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  gap: ${({ theme }) => theme.spacing.xs};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
    visibility: hidden;
  }
`

const MobileNavLink = styled.a`
  padding: ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: color ${({ theme }) => theme.transition};

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

const MobileCtaLink = styled.a`
  display: inline-flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #121212;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <Root $scrolled={scrolled}>
      <Inner>
        <LogoLink href="#" data-testid="header-logo" aria-label="HoneyTech — voltar ao topo">
          <BeeLogo size={28} />
          <BrandName>
            Honey<em>Tech</em>
          </BrandName>
        </LogoLink>

        <Nav data-testid="header-nav">
          {NAV_LINKS.slice(0, -1).map(({ label, href }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </Nav>

        <CtaLink href="#contato" data-testid="header-cta">
          Solicitar orçamento
        </CtaLink>

        <HamburgerButton
          data-testid="hamburger-button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </HamburgerButton>
      </Inner>

      <MobileMenu id="mobile-menu" $open={menuOpen} data-testid="mobile-menu">
        {NAV_LINKS.slice(0, -1).map(({ label, href }) => (
          <MobileNavLink key={href} href={href} onClick={closeMenu}>
            {label}
          </MobileNavLink>
        ))}
        <MobileCtaLink href="#contato" onClick={closeMenu}>
          Solicitar orçamento
        </MobileCtaLink>
      </MobileMenu>
    </Root>
  )
}

export default Header
