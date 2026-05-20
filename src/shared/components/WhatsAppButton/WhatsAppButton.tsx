import styled from 'styled-components'
import { BiLogoWhatsapp } from 'react-icons/bi'

const WHATSAPP_URL =
  'https://wa.me/5541991892409?text=Ol%C3%A1%21+Vim+pelo+site+da+HoneyTech+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+e+solicitar+um+or%C3%A7amento.'

const FloatingLink = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border-radius: 50%;

  background-color: #25d366;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.08);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.4),
      0 0 0 3px rgba(37, 211, 102, 0.4);
  }
`

function WhatsAppButton() {
  return (
    <FloatingLink
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <BiLogoWhatsapp size={28} />
    </FloatingLink>
  )
}

export default WhatsAppButton
