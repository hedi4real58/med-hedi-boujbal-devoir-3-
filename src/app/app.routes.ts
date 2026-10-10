import { Routes } from '@angular/router';
import { JeuxComponent } from './jeux/jeux.component';
import { AddJeuxComponent } from './add-jeux/add-jeux.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';

export const routes: Routes = [
    { path : "jeux" , component : JeuxComponent},
    { path : "add-jeux" , component : AddJeuxComponent},
    {path : "" , redirectTo :"jeux" , pathMatch : "full"},
    {path :"updateJeu/:id", component : UpdateJeuComponent}

];
