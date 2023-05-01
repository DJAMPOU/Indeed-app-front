export class Horaires_Roulements{

    id: number;
    name: string;

    constructor(
        id : number = 1,
        name: string = 'Repos le weekend'
    ){
        this.id = id;
        this.name = name;
    }
}