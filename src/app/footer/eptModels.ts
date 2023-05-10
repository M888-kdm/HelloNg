export interface Etudiant {
    numero:string,
    prenom:string,
    nom:string,
    poids:number,
    adresse:string,
    inscrit:boolean,
    formation:Formation
}

export interface Formation {
    nom:string,
    description:string,
    departement:Departement
}

export interface Departement {
    nom:string,
    desc:string,
    formations:Formation[]
}