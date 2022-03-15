import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css'],
})
export class CalcularComponent implements OnInit {
  @Input() entrada!: any;
  @Output()
  propagar = new EventEmitter<number>();

  salida!: number;
  x: any = 0;

  acumuladorS: number = 0;
  acumuladorR: number = 0;
  acumuladorM: number = 1;
  acumuladorD: number = 0;
  acumuladorC: number = 0;

  booleanoSuma = false;
  booleanoResta = false;
  booleanoMultiplicar = false;
  booleanoDividir = false;
  booleanoRaizCuadrada = false;

  acumuladorSuma : number = 0;
  acumuladorResta : number = 0;
  acumuladorMultiplicar : number = 0;
  acumuladorDividir : number = 0;
  acumuladorRaiz : number = 0;


  constructor() {}

  ngOnInit(): void {}

  suma() {
    this.x = this.entrada;

    this.x = parseInt(this.x, 10);
    this.acumuladorS = this.acumuladorS + this.x;

    this.salida = this.acumuladorS;

    this.booleanoSuma = true;
  }

  resta() {
    console.log(this.acumuladorR);

    this.x = this.entrada;

    this.x = parseInt(this.x, 10);

    if (this.acumuladorR === 0) {
      this.resultado();
      this.acumuladorR += this.x;
    } else {
      this.acumuladorR = this.acumuladorR - this.x;
      this.salida = this.acumuladorR;
    }

    this.booleanoResta = true;
  }

  multiplicar() {
    this.x = this.entrada;

    this.x = parseInt(this.x, 10);

    this.acumuladorM *= this.x;

    this.salida = this.acumuladorM;

    this.booleanoMultiplicar = true;
  }

  dividir() {
    this.x = this.entrada;

    this.x = parseInt(this.x, 10);

    if (this.x === 0) {
      alert('No se puede dividir entre 0');
      this.entrada = '';
    }

    if (this.acumuladorD === 0) {
      this.acumuladorD = this.x;
    } else {
      let dividir = this.acumuladorD / this.x;
      this.acumuladorD = dividir;

      this.salida = dividir;
    }
  }

  raizCuadrada() {
    this.x = this.entrada;

    this.x = parseInt(this.x, 10);

    this.acumuladorC = Math.sqrt(this.x);

    this.salida = this.acumuladorC;

    this.booleanoRaizCuadrada = true;
  }

  resultado() :number{

    if (this.booleanoSuma === true) {
        this.acumuladorSuma = this.acumuladorS + this.x;
        this.acumuladorS = this.acumuladorSuma;
        this.entrada = this.acumuladorSuma;

        return this.salida = this.acumuladorSuma;
    } else if (this.booleanoSuma === false) {
        this.entrada = 0;
    }

    if (this.booleanoResta === true) {
        this.acumuladorResta = this.acumuladorR - this.x;

        this.acumuladorR = this.acumuladorResta;

        return this.salida = this.acumuladorR;
    } else {
        this.entrada = 0;
    }

    if (this.booleanoMultiplicar === true) {
      this.acumuladorMultiplicar = this.acumuladorM * this.x;
        this.acumuladorM = this.acumuladorMultiplicar;
        this.entrada = this.acumuladorMultiplicar;

        return this.salida = this.acumuladorMultiplicar;
    } else if (this.booleanoMultiplicar === false) {
        this.entrada = 0;
    }

    if (this.booleanoDividir === true) {
        this.acumuladorDividir = this.acumuladorD / this.x;
        this.acumuladorD = this.acumuladorDividir;
        this.entrada = this.acumuladorDividir;
        return this.salida = this.acumuladorDividir;
    } else if (this.booleanoDividir === false) {
        this.entrada = 0;
    }

    if (this.booleanoRaizCuadrada === true) {
        this.acumuladorRaiz = Math.sqrt(this.acumuladorC);
        this.acumuladorC = this.acumuladorRaiz;
        return this.salida = this.acumuladorRaiz;
    } else if (this.booleanoRaizCuadrada === false) {
        this.entrada = 0;
    }

    return 0;
}


  limpiar() {
    this.x = 0;
    this.acumuladorSuma = 0;
    this.acumuladorResta = 0;
    this.acumuladorMultiplicar = 0;
    this.acumuladorDividir = 0;
    this.acumuladorRaiz = 0;
    this.acumuladorR = 0;
    this.acumuladorS = 0;
    this.acumuladorM = 0;
    this.acumuladorD = 0;
    this.acumuladorR = 0;

    this.propagar.emit(this.entrada);
    this.entrada = 0;
    this.salida = 0;

}
}
