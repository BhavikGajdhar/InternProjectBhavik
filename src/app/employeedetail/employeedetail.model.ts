export class Employeedetail {
    public id!: number;
    public name!: string;
    public salary!: number;
    constructor(
        id: number,
        name: string,
        salary: number
    ) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}