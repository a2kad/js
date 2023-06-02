import { Component } from '@angular/core';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  faCarrot = faCarrot;
  public prodIngredinetns: string;
  public prodPhoto: string;
  public prodAllergen: string;
  public prodNova: string;
  public prodNutriScoreIndex: string;
  public prodNutriScore: string;
  public prodPalme: string;
  public stores: string;
  public prodNovaIndex : string;

  productSearch = new FormControl('');

  submitted = false;

  onSubmit() { this.submitted = true; }

  public prodCode: string;

  constructor(private http: HttpClient) {
    this.prodCode = '';
    this.prodIngredinetns = '';
    this.prodPhoto = '';
    this.prodAllergen = '';
    this.prodNova = '';
    this.prodNutriScoreIndex = '';
    this.prodNutriScore = '';
    this.prodPalme = '';
    this.stores = '';
    this.prodNovaIndex = '';
  }

  public showProductInfo() {
    return this.http.get<any>("https://world.openfoodfacts.org/api/v0/product/" + this.productSearch.value) // 3017620422003  
      .subscribe((data) => {
        this.prodCode = data['code'],
          this.prodIngredinetns = data['product']['ingredients_text_fr'],
          this.prodPhoto = data['product']['image_url'],
          this.prodAllergen = data['product']['allergens_from_ingredients'],

        //  NOVA

        this.prodNovaIndex = data['product']['nova_groups']
        if (this.prodNovaIndex == '1') {
          this.prodNova = "../../assets/images/320px-NOVA_group_1.svg.png"
        } else if (this.prodNovaIndex == '2') {
          this.prodNova = "../../assets/images/320px-NOVA_group_2.svg.png"
        } else if (this.prodNovaIndex == '3') {
          this.prodNova = "../../assets/images/320px-NOVA_group_3.svg.png"
        } else if (this.prodNovaIndex == '4') {
          this.prodNova = "../../assets/images/320px-NOVA_group_4.svg.png"
        } else{
          this.prodNova = "../../assets/images/320px-NOVA_group_inconnu.svg.png"
        }

        // Nutri Score
        this.prodNutriScoreIndex = data['product']['nutrition_grade_fr']
        if (this.prodNutriScoreIndex == 'a') {
          this.prodNutriScore = "../../assets/images/240px-Nutri-score-A.svg.png"
        } else if (this.prodNutriScoreIndex == 'b') {
          this.prodNutriScore = "../../assets/images/240px-Nutri-score-B.svg.png"
        } else if (this.prodNutriScoreIndex == 'c') {
          this.prodNutriScore = "../../assets/images/240px-Nutri-score-C.svg.png"
        } else if (this.prodNutriScoreIndex == 'd') {
          this.prodNutriScore = "../../assets/images/240px-Nutri-score-D.svg.png"
        } else if (this.prodNutriScoreIndex == 'e') {
          this.prodNutriScore = "../../assets/images/240px-Nutri-score-E.svg.png"
        }else{
          this.prodNutriScore = "../../assets/images/240px-Nutri-score-Inconnu.svg .png"
        }

        this.prodPalme = data['product']['ingredients_from_palm_oil_n']
        this.stores = data['product']['stores']
      });
  }
}
