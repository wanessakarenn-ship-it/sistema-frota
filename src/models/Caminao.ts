class Caminhao extends Veiculo {
    private capacidadeCarga: number;

    constructor(modelo: string, ano: number, capacidadeCarga: number) {
        super(modelo, ano);
        this.capacidadeCarga = capacidadeCarga;
    }

    obterDescricao(): string {
        return `O caminhão é um ${this.modelo} do ano ${this.ano} com capacidade de carga de ${this.capacidadeCarga} toneladas.`;
    }
}

