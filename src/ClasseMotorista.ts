export class Motorista {
    // Atributos privados com a palavra-chave private
    private nome: string;
    private readonly cpf: number;
    private readonly cnh: number;

    constructor(nome: string, cpf: number, cnh: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.cnh = cnh;
    }

    // Getters públicos para acessar os atributos
    public getNome(): string {
        return this.nome;
    }

    public getCpf(): number {
        return this.cpf;
    }

    public getCnh(): number {
        return this.cnh;
    }

    // Método para exibir a ação de dirigir
    public dirigir(): void {
        console.log(`Motorista ${this.nome} está dirigindo.`);
    }
}