import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Marco Antonio';
  nombre2 = 'susAn villarreal gutiérrez';
  array = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llegó la data'), 3500);
  });
  fecha = new Date();
  video = 'XaiNzHKm1Fk';
  activar:boolean = true;
}
