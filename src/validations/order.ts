import { OrderI } from '../interfaces';
// import HttpException from '../classes/httpException';

export default function orderValidate(order: OrderI): void {
  console.table(order);
}
