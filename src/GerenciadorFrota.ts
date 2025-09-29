import { Motorista } from './ClasseMotorista';
// As classes de Veículo serão criadas pelo outro aluno
// import { Veiculo } from './Veiculo'; 

export class GerenciadorFrota {
    public veiculos: any[] = []; // O tipo correto seria Veiculo[]
    public motoristas: Motorista[] = [];

    public adicionarVeiculo(veiculo: any): void { // O tipo correto seria Veiculo
        this.veiculos.push(veiculo);
        console.log("Veículo adicionado à frota.");
    }

    public adicionarMotorista(motorista: Motorista): void {
        this.motoristas.push(motorista);
        console.log("Motorista adicionado ao sistema.");
    }

    public listarVeiculos(): void {
        if (this.veiculos.length === 0) {
            console.log("Nenhum veículo na frota.");
            return;
        }

        console.log("--- Lista de Veículos ---");
        // Utiliza o polimorfismo chamando o método `descricao()` de cada objeto
        this.veiculos.forEach(veiculo => veiculo.descricao());
    }

    public atribuirMotorista(veiculo: any, motorista: Motorista): void { // O tipo correto seria Veiculo
        const veiculoExiste = this.veiculos.includes(veiculo);
        const motoristaExiste = this.motoristas.includes(motorista);
        
        if (veiculoExiste && motoristaExiste) {
            veiculo.atribuirMotorista(motorista);
            console.log(`Motorista ${motorista.getNome()} atribuído ao veículo.`);
        } else {
            console.log("Erro: Veículo ou motorista não encontrado.");
        }
    }
}