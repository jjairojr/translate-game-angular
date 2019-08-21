import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() tentativas;
  public coracaoCheio: string = '../../assets/coracao_cheio.png';
  public coracaoVazio: string = '../../assets/coracao_vazio.png';

  coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    try {
    console.log(this.tentativas)
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  } catch (error) { }
}
}
