import { Injectable } from '@angular/core';
import { Jeu } from '../jeux.model';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  jeux : Jeu[];
  jeu! : Jeu;
  constructor() { 
    this.jeux =[
    {idjeu : 1 , nomjeu : "Battlefield 5" , prixjeu : 29.99 , dateCreation : new Date ("11/20/2018")}, 
    {idjeu : 2 , nomjeu : "Squad" , prixjeu : 34.99 , dateCreation : new Date ("12/14/2020")}, 
    {idjeu : 3 , nomjeu : "dark souls 3" , prixjeu : 24.99 , dateCreation : new Date ("03/24/2016")}
    ];
  }
  listeJeu():Jeu[]{
    return this.jeux;
  }
  addJeu(jeu : Jeu){
    this.jeux.push(jeu);
  }
  supprimerJeu(j : Jeu){
    const index = this.jeux.indexOf(j,0);
    if (index > -1){
      this.jeux.splice(index,1);
    }
  }
  consulterJeu (id:number): Jeu{
    return this.jeux.find(p => p.idjeu ==id)!;
    
  }
  updateJeu(j : Jeu){
    const index = this.jeux.indexOf(j,0);
    if (index > -1){
      this.jeux.splice(index,1);
      this.jeux.splice(index,0,j);
    }
  }
}
