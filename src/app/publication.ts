
export class Publication{
    id: number;
    titre: string;
    entrepriseName: string;
    mail: string;
    emplacement: string;
    typeId: Number[];
    horaire_roulementId: Number[];
    description: string;
    signaler: boolean;
    star: number;
    manyOffer: boolean;
    haveHerSite: boolean;
    salaire: string;
    date: Date;

    constructor(
        titre: string = "Développeur d'Application Javascript React en Alternance",
        entrepriseName: string = 'OpenClassrooms',
        mail: string = 'pierrewalter@gmail.com',
        emplacement: string = 'Lyon(69)',
        typeId: Number[] = [0],
        horaire_roulementId: Number[] = [0],
        description: string = `Vous cherchez à acquérir des compétences d aujourd hui et un métier qui a de l avenir en alternance? Notre mission ? Rendre l éducation accessible à tous ! L’alternance avec OpenClassrooms, c’est apprendre un métier avec une formation mêlant 20 % de théorie et 80 % de pratique, pour être 100 % prêt à l’emploi ! Grâce à nos équipes, qui épaulent chaque profil dans la recherche d’un employeur, nous affichons un taux d’insertion de nos étudiants de plus de 80 % en entreprise `,
        signaler: boolean = false,
        star: number = 2.3,
        manyOffer: boolean = true,
        haveHerSite: boolean = true,
        salaire:string = "1200 euro par mois",
        date: Date = new Date()
    ){
        this.id = 1;
        this.titre = titre;
        this.entrepriseName = entrepriseName;
        this.mail = mail;
        this.emplacement = emplacement;
        this.typeId = typeId;
        this.horaire_roulementId =horaire_roulementId;
        this.description = description;
        this.signaler = signaler;
        this.star = star;
        this.manyOffer = manyOffer;
        this.haveHerSite = haveHerSite;
        this.salaire =  salaire;
        this.date = date;
    }
}