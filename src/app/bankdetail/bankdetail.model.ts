export class Bankdetail {
  id!: number;
  name!: string;
  acc_no!: string;
  email!: string;
  phone!: string;
  bank_name!: string;
  gender!: string;
  address!: string;
  amount!: string;
  currency_code!: string;

  constructor(
    id: number,
    name: string,
    acc_no: string,
    email: string,
    phone: string,
    bank_name: string,
    gender: string,
    address: string,
    amount: string,
    currency_code: string
  ) {
    this.id = id;
    this.name = name;
    this.acc_no = acc_no;
    this.email = email;
    this.phone = phone;
    this.bank_name = bank_name;
    this.gender = gender;
    this.address = address;
    this.amount = amount;
    this.currency_code = currency_code;
  }
}
