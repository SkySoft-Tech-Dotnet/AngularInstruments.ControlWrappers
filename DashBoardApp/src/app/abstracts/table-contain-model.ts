export class TableContainModel {
  id: number;
  firstName: string;
  lastName: string;  

  public toString(): string {
      return "id=" + this.id + "_firstName=" + this.firstName + "_lastName=" + this.lastName;
    }
}
