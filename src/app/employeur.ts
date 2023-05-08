
export class Employeur{
    id: number;
    entrepriseName: string;
    numbreEmployee: string;
    nom: string;
    isManager: boolean;
    howDiscover: string;
    telNumber: string;

    constructor(
        entrepriseName: string = 'OpenClassrooms',
        numbreEmployee: string = 'De 1 à 49',
        nom: string = 'Stephen',
        isManager: boolean = true,
        howDiscover: string = 'vidéo en ligne',
        telNumber: string = '07 00 00 00 00'
    ){
        this.id = 1;
        this.entrepriseName =entrepriseName;
        this.numbreEmployee = numbreEmployee;
        this.nom = nom;
        this.isManager = isManager;
        this.howDiscover = howDiscover;
        this.telNumber = telNumber;
    }
}