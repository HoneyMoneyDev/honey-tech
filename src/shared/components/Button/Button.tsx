interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

function Button({ label, variant = 'primary', onClick, disabled = false }: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
