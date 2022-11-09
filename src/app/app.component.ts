import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kör alakú telep terület számítása';
  // title= "Kör területe";
  radius !: number;
  area !: number ;
  sum !: number;

  calcArea():void{
    this.area = (Math.pow(this.radius,2)*Math.PI)/2;
    this.radius = 0;

    this.sum = this.area * 2500;
  }
}
