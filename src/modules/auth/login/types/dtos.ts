export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
}

export interface ForgotPasswordDto {
  email: string;
  newPassword: string;
  token: string;
}
