import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  entrada !: number;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    console.log(this.entrada);

  }

  procesaLimpiar(){
    this.entrada = 0;

  }


}
