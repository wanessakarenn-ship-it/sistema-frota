

const meuCarro = new Carro ("Ford Fusion", 2020, 4);
const meuCaminhao = new Caminhao ("Volvo", 2000, 50);

console.log (" --- Testando o Carro ---");
console.log (meuCarro.obterDescricao ());
meuCarro.ligar ();
meuCarro.acelerar ();
meuCarro.desligar ();
meuCarro.acelerar ();

console.log ("\n --- Testando o Caminhão ---");
console.log (meuCaminhao.obterDescricao ());
meuCaminhao.ligar ();
meuCaminhao.acelerar ();
meuCaminhao.desligar ();
meuCaminhao.acelerar ();