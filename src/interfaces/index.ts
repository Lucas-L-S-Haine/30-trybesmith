export interface UserI {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface LoginI {
  id?: number;
  username: string;
  password: string;
}

export interface ProductI {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface OrderI {
  id?: number;
  userId?: number;
  products?: number[];
}
