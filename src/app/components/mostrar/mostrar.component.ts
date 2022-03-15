import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  @Input() salida!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
