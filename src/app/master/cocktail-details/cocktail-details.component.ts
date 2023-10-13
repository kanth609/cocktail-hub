import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent {

  drinksList: any[] =[];
  updatedDrinksList: any[] = [];
  selectedCocktail!: string | null;
  toggleAPI = false;

  filterArr = [
    { filterName: "Alcoholic", checked: true, disabled: false, apiKey: "Alcoholic" },
    { filterName: "Non-Alcoholic", checked: true, disabled: false, apiKey: "Non_Alcoholic" },
  ]

  constructor(private activatedRouter: ActivatedRoute, private utility: UtilityService) {
    this.activatedRouter.queryParamMap.subscribe(res => {
      this.selectedCocktail = res.get("s");
      if (this.selectedCocktail) {
        this.getSelectedCocktailData('/search.php?s=' + this.selectedCocktail);
      }
    })
  }

  getSelectedCocktailData(cocktail: any) {
    this.utility.get(cocktail).then((res: any) => {
      console.log(res);
      this.updateFilterResults(res);
    }).catch(err => {
      console.error(err)
    })
  }

  onFilterChange(i: number) {
    // let URL = "/filter.php?s=" + this.selectedCocktail + "&a=";
    let URL = "/filter.php?a=";
    let selectedApiKey = this.filterArr.filter(e => e.checked).map(e => e.apiKey);
    console.log(selectedApiKey)
    if (selectedApiKey.length > 0) {
      if(this.toggleAPI){
        this.utility.get(URL + selectedApiKey.join(",")).then((res: any) => {
          this.updateFilterResults(res, true);
        }).catch(err => {
          console.error(err);
        })
      } else {
        let filterKey = this.filterArr.filter(e => e.checked).map(e => e.filterName)
        this.updatedDrinksList = this.drinksList.filter(drink => filterKey.includes(drink.drinkData['strAlcoholic']))
      }
    } else {
      this.utility.showSnackBar("Please select atleast one filter!");
    }
  }

  updateFilterResults(data :any, isForFilter = false){
    this.updatedDrinksList = [];
    if (Array.isArray(data?.drinks)) {
      data['drinks'].forEach((ele: any) => {
        // isForFilter is true => if length > 1
        // let alcoholStr = "";
        let selectedKey = this.filterArr.filter(e => e.checked).map(e => e.apiKey)
        let obj = {
          image: ele.strDrinkThumb,
          isAlcoholic: (selectedKey.length == 1) ? (selectedKey[0] === "Alcoholic") : (ele.strAlcoholic  === "Alcoholic"),
          name: ele.strDrink,
          drinkData: { ...ele }
        }
        this.updatedDrinksList.push(obj);
        this.drinksList.push(obj);
      })
    };
  }
}
