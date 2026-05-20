export const theme = {
  colors: {
    primary: '#ffa500',
    primaryDark: '#e6940a',
    logo: '#dbac22',

    bgBody: '#121212',
    bgSurface: '#1e1e1e',

    textPrimary: '#ffffff',
    textSecondary: '#b3b3b3',

    border: '#333333',

    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },

  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 8px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '28px',
    hero: '48px',
  },

  transition: '0.3s ease',

  breakpoints: {
    mobile: '768px',
  },
} as const

export type Theme = typeof theme
