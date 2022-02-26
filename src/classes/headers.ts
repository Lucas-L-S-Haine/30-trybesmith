export default class UserHeaders extends Headers {
  authorization?: string;

  constructor(authorization: string) {
    super();

    this.authorization = authorization;
  }
}
