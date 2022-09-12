import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']//,
  //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';
  // essa informação está vindo do componente data-binding

  constructor() { }

  ngOnInit() {
  }

}
