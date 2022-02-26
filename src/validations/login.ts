import { LoginI } from '../interfaces';
import HttpException from '../classes/httpException';

const validateUsername = (loginData: LoginI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!loginData.username) {
    error.status = 400;
    error.error = 'Username is required';
    throw error;
  }
};

const validatePassword = (loginData: LoginI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!loginData.password) {
    error.status = 400;
    error.error = 'Password is required';
    throw error;
  }
};

export default function loginValidate(loginData: LoginI): void {
  validatePassword(loginData);
  validateUsername(loginData);
}
