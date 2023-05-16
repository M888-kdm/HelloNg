import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../eptModels';

@Component({
  selector: 'ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.scss']
})

export class AjoutEtudiantComponent implements OnInit{

  listEtudiants: Etudiant[] = [];

  etudiant: Etudiant = {
    numero:'',
    prenom:'',
    nom:'',
    age: 5,
    poids: 34.4,
    adresse:'',
    inscrit:true,
  }

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  initForm(){
    this.etudiant = {
      numero:'',
      prenom:'',
      nom:'',
      email:''
    };
  }

  ajoutEtudiant(){
    this.listEtudiants.push(this.etudiant);
    this.initForm();
  }

  genTitleStyle(e:Etudiant):any{
    let res:any = {
      "text-decoration":"underline",
      "font-size":"30px"
    }
    if(e.inscrit){
      res.color = 'green';
    }
    return res;
  }

  genClass(e:Etudiant):any{
    let res = {
      "text-danger": !e.inscrit,
      "bg-warning": !e.inscrit,
      "text-success": !e.inscrit,
      "bg-info": !e.inscrit
    }
  }

}
