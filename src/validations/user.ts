import { UserI } from '../interfaces';
import HttpException from '../classes/httpException';
import { isValidUsername, isValidClass, isValidPassword } from '../utils/functions';

const validateUsername = (user: UserI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!user.username) {
    error.status = 400;
    error.error = 'Username is required';
    throw error;
  }
  if (typeof user.username !== 'string') {
    error.status = 422;
    error.error = 'Username must be a string';
    throw error;
  }
  if (!isValidUsername(user.username)) {
    error.status = 422;
    error.error = 'Username must be longer than 2 characters';
    throw error;
  }
};

const validateClass = (user: UserI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!user.classe) {
    error.status = 400;
    error.error = 'Classe is required';
    throw error;
  }
  if (typeof user.classe !== 'string') {
    error.status = 422;
    error.error = 'Classe must be a string';
    throw error;
  }
  if (!isValidClass(user.classe)) {
    error.status = 422;
    error.error = 'Classe must be longer than 2 characters';
    throw error;
  }
};

const validateLevel = (user: UserI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (user.level <= 0) {
    error.status = 422;
    error.error = 'Level must be greater than 0';
    throw error;
  }
  if (!user.level) {
    error.status = 400;
    error.error = 'Level is required';
    throw error;
  }
  if (typeof user.level !== 'number') {
    error.status = 422;
    error.error = 'Level must be a number';
    throw error;
  }
};

const validatePassword = (user: UserI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!user.password) {
    error.status = 400;
    error.error = 'Password is required';
    throw error;
  }
  if (typeof user.password !== 'string') {
    error.status = 422;
    error.error = 'Password must be a string';
    throw error;
  }
  if (!isValidPassword(user.password)) {
    error.status = 422;
    error.error = 'Password must be longer than 7 characters';
    throw error;
  }
};

export default function userValidate(user: UserI): void {
  validateUsername(user);
  validateClass(user);
  validateLevel(user);
  validatePassword(user);
}
