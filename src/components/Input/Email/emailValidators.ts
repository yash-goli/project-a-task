export const emailValidators: ((value: string) => {message: string, valid: boolean})[] = [
  (value: string) => {
    return {
      message: 'email valid',
      valid: /\S+@\S+\.\S+/.test(value)
    }
  }
];