export class FormValidator {
  constructor() {}

  public validate_phone(number: string): boolean {
    const status: boolean =
      number.trim() !== "" && number.trim().length === 10 ? true : false;

    return status;
  }

  public validate_password(password: string): boolean {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W).{8,150}$/;

    return regex.test(password);
  }

  public validate_username(name: string): boolean {
    const regex = /^[a-zA-Z0-9_.]+$/;

    return regex.test(name);
  }

  public isNotEmpty(value: string): boolean {
    const status: boolean = value.trim() !== "" ? true : false;

    return status;
  }
}
