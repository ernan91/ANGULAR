import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'] // Il s'agit de styleUrls, pas styleUrl
})
export class ProduitsComponent {
  produits: string[] | undefined; // un tableau de chaînes de caractères

  constructor() {
    // Assignez les valeurs à la propriété de classe, pas à la variable locale
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }
}
