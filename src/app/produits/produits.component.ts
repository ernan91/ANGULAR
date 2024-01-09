import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'] // Il s'agit de styleUrls, pas styleUrl
})
export class ProduitsComponent {
  produits : Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService ) {
  this.produits = produitService.listeProduits();
  }
}
