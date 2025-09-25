abstract class Veiculo {
    protected modelo: string;
    protected ano: number;
    protected ligado: boolean;

    constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }

    ligar(): void {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`$ {this.modelo} (${this.ano}) ligado.`);
        } else {
            console.log(`$ {this.modelo} (${this.ano}) já está ligado.`);
        }
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false;
            console.log(`$ {this.modelo) ($ {this.ano}) desligado.`);
        } else {
            console.log(`$ {this.modelo} (${this.ano} já está desligado.`);
        }
    }

    acelerar(): void {
        if (this.ligado) {
            console.log(`$ {this.modelo} (${this.ano}) acelerando`);
        } else {
            console.log(`Não é possível acelerar. $ { this.modelo} ($ {this.ano}) está desligado.`);
        }
    }

    abstract obterDescricao(): string;
}
