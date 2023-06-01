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
  public prodIngredinetns : string;
  public prodPhoto : string;
  productSearch = new FormControl('');

  public prodCode : string;

  constructor(private http: HttpClient){
    this.prodCode = '';
    this.prodIngredinetns = '';
    this.prodPhoto = '';
  }

  public showProductInfo(){
    return this.http.get<any>("https://world.openfoodfacts.org/api/v0/product/"+this.productSearch.value) // 3017620422003  
    .subscribe((data) => {
      this.prodCode = data['code'],
      this.prodIngredinetns = data['product']['ingredients_text_fr'],
      this.prodPhoto = data['product']['image_url']
    });
  }
}
