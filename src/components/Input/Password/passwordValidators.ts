export const passwordValidators: ((value: string) => {message: string, valid: boolean})[] = [
  (value: string) => {
    return {
      message: '8+ characters',
      valid: value.length > 8
    }
  },
  (value: string) => {
    return {
      message: 'lowercase letter',
      valid: /[a-z]/.test(value)
    }
  },
  (value: string) => {
    return {
      message: 'uppercase letter',
      valid: /[A-Z]/.test(value)
    }
  },
  (value: string) => {
    return {
      message: 'numbers',
      valid: /\d+/.test(value)
    }
  },
  (value: string) => {
    return {
      message: 'special character',
      valid: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)
    }
  }
];