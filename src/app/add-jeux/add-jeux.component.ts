import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Jeu } from '../jeux.model';
import { JeuService } from '../services/jeu.service';



@Component({
  selector: 'app-add-jeux',
  imports: [FormsModule],
  templateUrl: './add-jeux.component.html',
  styleUrl: './add-jeux.component.css'
})
export class AddJeuxComponent implements OnInit{
  newJeu = new Jeu();
  message : string='';
  constructor(private jeuservice : JeuService , private router : Router){

  }
  ngOnInit(): void {
    
  }
  addJeu(){
    //console.log(this.newJeu);
    this.jeuservice.addJeu(this.newJeu); 
    this.router.navigate(['/jeux'])
    this.message="le jeu " + this.newJeu.nomjeu + " est ajouté avec succés !"
  }

}
