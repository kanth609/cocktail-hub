import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ingrediant-dialog',
  templateUrl: './ingrediant-dialog.component.html',
  styleUrls: ['./ingrediant-dialog.component.scss']
})
export class IngrediantDialogComponent {

  public Object = Object;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data)
  }

}
