export class Coracao {
    constructor(public cheio: Boolean,
                public urlCoracaoCheio = "../../assets/coracao_cheio.png",
                public urlCoracaoVazio = "../../assets/coracao_vazio.png" ) {}

    exibeCoracao(): string {
        if(this.cheio){
            return this.urlCoracaoCheio;
        } else {
            return this.urlCoracaoVazio;
        }
    }
}