import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public showLoader = false;
  private readonly apiKey = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  get(url:string, options?:any){
    return new Promise((resolve, reject) => {
      const APIurl = this.apiKey + url;
      // const APIurl = "/filter.php?s=Margarita&a=Alcoholic";
      this.showLoader = true;
      this.http.get(APIurl, options).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(false);
          this.showLoader = false;
          console.log(err);
        },
        () => {
          this.showLoader = false;
        }
      );
    })
  }

  showSnackBar(msg:string){
    this.snackbar.open(msg, "Close", {
      duration: 5000
    });
  }

}
