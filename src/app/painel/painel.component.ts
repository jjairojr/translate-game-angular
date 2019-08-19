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
  jogando: boolean;
  tentativas = 3;
  frases: FraseModel[] = Frases;
  rodada: number = 0;
  fraseRodada: FraseModel;
  progresso: number = 0;
  constructor() {
    this.atualizaRodada();
  }

  instrucao: string = 'Traduz ae';
  resposta: string = "";
  ngOnInit() {
  }
  
  teste(event) {
    this.resposta = event.target.value;
  }

  verificaResposta(): void {
    if(this.resposta === this.fraseRodada.frasePT){
      this.jogando = true;
      this.rodada++;
      this.fraseRodada = this.frases[this.rodada];
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = "";
      if(this.rodada > 3){
        this.rodada = 3
        this.fraseRodada = this.frases[this.rodada]
      }
      
    } else {
      this.tentativas--;
      if(this.tentativas === 0){
        this.jogando = false;
        alert('Perdeu Menor');
      }
    }
  }

  atualizaRodada(){
    this.fraseRodada = this.frases[this.rodada];
  }

}
