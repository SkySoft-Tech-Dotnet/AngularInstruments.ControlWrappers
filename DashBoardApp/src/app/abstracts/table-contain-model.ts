export class TableContainModel {
    id: number;
    firstName: string;
    lastName: string;

    constructor(_id?: number,
        _firstName?: string,
        _lastName?: string, ) {
        this.id = _id;
        this.firstName= _firstName;
        this.lastName= _lastName;
    } 

    public toString(): string {
        return "id=" + this.id + " firstName=" + this.firstName + " lastName=" + this.lastName;
    }
}
