import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  cocktailItems = [
    { name: "Mojito", 
      image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg", 
      routeLink: '/details',
      apiobj: {
        s: 'Mojito'
      }
    },
    { name: "Margarita", 
      image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg", 
      routeLink: '/details',
      apiobj: {
        s: 'Margarita'
      }
    },
    { name: "Negroni", 
      image: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg", 
      routeLink: '/details',
      apiobj: {
        s: 'Negroni'
      }
    },
  ];

  constructor() {

  }
}
