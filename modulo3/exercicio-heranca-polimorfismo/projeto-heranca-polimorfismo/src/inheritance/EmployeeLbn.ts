import { UserLbn } from "./UserLbn";

export class EmployeeLbn extends UserLbn {
  protected baseSalary: number;
  protected admissionDate: Date;
  static BONUS: number = 400;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    baseSalary: number,
    admissionDate: Date
  ) {
    super(id, email, name, password);
    this.baseSalary = baseSalary;
    this.admissionDate = admissionDate
  }

  public getBaseSalary(): number {
    return this.baseSalary
  }

  public calcTotalSalary(): number {
    return this.baseSalary + EmployeeLbn.BONUS
  }

  }