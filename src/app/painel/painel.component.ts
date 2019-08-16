import { Component, OnInit, ɵConsole } from "@angular/core";
import { Frases } from "./frase-mock";
import { FraseModel } from "./../shared/frase.model";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit {
  testes: String[];
  constructor() {
    console.log(this.frases);
  }
  frases: FraseModel[] = Frases;
  resposta: string;
  ngOnInit() {}
  teste(event) {
    this.resposta = event.target.value;
  }
}
