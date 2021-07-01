export class Employeedetail {
    public emp_id: number;
    public name: string;
    public salary: string;
    constructor(
        emp_id: number,
        name: string,
        salary: string
    ) {
        this.emp_id = emp_id;
        this.name = name;
        this.salary = salary;
    }
}