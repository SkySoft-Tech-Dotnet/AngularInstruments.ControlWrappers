export class TableContainModel {
  id: number;
  firstName: string;
  lastName: string;
}

TableContainModel.prototype.toString = function () {
    return "id=" + this.id + " firstName=" + this.firstName + " lastName=" + this.lastName;
}