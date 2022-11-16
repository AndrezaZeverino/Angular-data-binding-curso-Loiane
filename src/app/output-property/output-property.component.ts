import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
      // compartilhei a info do evento onde chama o componente contador, lá no componente data-binding

  @ViewChild('campoInput', { static: true }) campoValorInput: ElementRef;

  incrementa(){
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
    // compartilhei a info do evento onde chama o componente contador, lá no componente data-binding
  }

  decrementa(){
    //this.valor--
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
        // compartilhei a info do evento onde chama o componente contador, lá no componente data-binding
  }

  constructor() { }

  ngOnInit() {
  }

}
