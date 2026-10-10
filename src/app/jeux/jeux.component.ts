import { Component, OnInit } from '@angular/core';
import { Jeu } from '../jeux.model';
import { CommonModule, DatePipe } from '@angular/common';
import { JeuService } from '../services/jeu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jeux',
  imports: [CommonModule,DatePipe,RouterLink],
  templateUrl: './jeux.component.html',
})
export class JeuxComponent implements OnInit {
  jeux : Jeu [];
  constructor(private jeuservice : JeuService){
    this.jeux = jeuservice.listeJeu();
  }
  ngOnInit(): void {
    
  }
  supprimerJeu(j : Jeu){
    //console.log(j);
    let conf=confirm("etes-vous sur ?")
    if (conf)
    this.jeuservice.supprimerJeu(j);
  }
}
