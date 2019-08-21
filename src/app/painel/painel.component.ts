import { AppComponent } from './../app.component';
import { Component, OnInit, ɵConsole, Output } from "@angular/core";
import { Frases } from "./frase-mock";
import { FraseModel } from "./../shared/frase.model";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit {
  jogando: boolean = true;
  tentativas = 3;
  frases: FraseModel[] = Frases;
  rodada: number = 0;
  fraseRodada: FraseModel;
  progresso: number = 0;
  constructor() {
    this.atualizaRodada();
  }

  instrucao: string = 'Traduz ae';
  resposta: string = '';

  ngOnInit() {
  }

  capturaValorInput(event) {
    this.resposta = event.target.value;
  }

  verificaResposta(): void {
    if (this.resposta === this.fraseRodada.frasePT) {
      this.jogando = true;
      this.rodada++;
      this.fraseRodada = this.frases[this.rodada];
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = '';
      console.log(this.frases.length);
      console.log(this.progresso);
      console.log(this.jogando);

      if (this.rodada > this.frases.length - 1 ) {
        this.limiteRodadas();
      }
    } else {
      this.tentativas--;
      this.perdeuJogo();
    }
    this.ganhouJogo();
  }

  atualizaRodada() {
    this.fraseRodada = this.frases[this.rodada];
  }

  limiteRodadas() {
    this.rodada = this.frases.length - 1  ;
    this.fraseRodada = this.frases[this.rodada];
  }

  ganhouJogo() {
    if (this.progresso === 100) {
      this.jogando = false;
      console.log(this.jogando);
      alert('ganhou');
    }
  }

  perdeuJogo() {
    if (this.tentativas === 0) {
      this.jogando = false;
      alert('perdeu');
    }
  }
}
