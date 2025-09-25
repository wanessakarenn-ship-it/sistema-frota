class Carro extends Veiculo {
    private numeroPortas: number;

    constructor(modelo: string, ano: number, numeroPortas: number) {
        super(modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    obterDescricao(): string {
        return `O carro é um ${this.modelo} do ano ${this.ano} com ${this.numeroPortas} portas.`;
    }
}