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

  productSearch = new FormControl('');

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
  }

  public showProductInfo() {
    return this.http.get<any>("https://world.openfoodfacts.org/api/v0/product/" + this.productSearch.value) // 3017620422003  
      .subscribe((data) => {
        this.prodCode = data['code'],
          this.prodIngredinetns = data['product']['ingredients_text_fr'],
          this.prodPhoto = data['product']['image_url'],
          this.prodAllergen = data['product']['allergens_from_ingredients'],
          //this.prodNova = data['product'].nova_groupnova_groups_tags[Object.keys(data['product'].nova_groupnova_groups_tags)[0]]
          this.prodNova = data['product']['nova_groups']
        this.prodNutriScoreIndex = data['product']['nutrition_grade_fr']
        if (this.prodNutriScoreIndex == 'a') {
          this.prodNutriScore = `<img src="../../assets/images/240px-Nutri-score-A.svg.png" class="imgScan img-fluid" alt="Scan barcode">`
        }else if (this.prodNutriScoreIndex == 'b') {
          this.prodNutriScore = `<img src="../../assets/images/240px-Nutri-score-B.svg.png" class="imgScan img-fluid" alt="Scan barcode">`
        }else if (this.prodNutriScoreIndex == 'c') {
          this.prodNutriScore = `<img src="../../assets/images/240px-Nutri-score-C.svg.png" class="imgScan img-fluid" alt="Scan barcode">`
        }else if (this.prodNutriScoreIndex == 'd') {
          this.prodNutriScore = `<img src="../../assets/images/240px-Nutri-score-D.svg.png" class="imgScan img-fluid" alt="Scan barcode">`
        }else if (this.prodNutriScoreIndex == 'e') {
          this.prodNutriScore = `<img src="../../assets/images/240px-Nutri-score-E.svg.png" class="imgScan img-fluid" alt="Scan barcode">`
        }

        this.prodPalme = data['product']['ingredients_from_palm_oil_n']
        this.stores = data['product']['stores']
      });
  }
}
