import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.scss']
})

export class AjoutEtudiantComponent implements OnInit{

  constructor(){
    etudiant: Etudiant={
      numero:'',
      prenom:'',
      nom:'',
      age:5,
      poids:34.4,
      adresse:'',
      inscrit:true,
    }
  }

}
