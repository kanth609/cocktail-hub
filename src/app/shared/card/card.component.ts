import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IngrediantDialogComponent } from 'src/app/master/ingrediant-dialog/ingrediant-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardDetails: any;

  constructor(private router:Router, public dialog: MatDialog){

  }

  onCardClick(data :any){
    if(data?.routeLink){
      this.router.navigate([data.routeLink], {queryParams: data.apiobj})
    } else if(data?.drinkData){
      // console.log(data.drinkData)
      let obj: any = {};
      // below line gives how many ingrediants are present for the drinks
      Object.keys(data.drinkData).filter(e=>e.startsWith("strIngredient")).forEach((ingrediant) => {
        if(data.drinkData[ingrediant]) obj[ingrediant] = data.drinkData[ingrediant]
      });
      data.drinkData['filteredIngrediants'] = obj;
      this.dialog.open(IngrediantDialogComponent, {
        data: data.drinkData,
        disableClose: true,
      });
    }
  }
}

