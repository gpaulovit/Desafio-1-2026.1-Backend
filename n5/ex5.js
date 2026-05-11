function checkCashRegister(price, cash, cid) {
  const valoresMoedas = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let trocoDevido = (cash - price) * 100;

  let totalGaveta = 0;

for (let i = 0; i < cid.length; i++) {
    totalGaveta += Math.round(cid[i][1] * 100);
  }
if (totalGaveta < trocoDevido) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
if (totalGaveta === trocoDevido) {
    return {status: "CLOSED", change: cid};
  }
let trocoParaDevolver = []; 

  let gavetaInvertida = [...cid].reverse();

  for (let i = 0; i < gavetaInvertida.length; i++) {
    let nomeDaMoeda = gavetaInvertida[i][0];
    let valorDaMoeda = valoresMoedas[nomeDaMoeda]; 
    let estoqueNaGaveta = Math.round(gavetaInvertida[i][1] * 100); 
    
    let valorUsadoDestaMoeda = 0; 
    while (trocoDevido >= valorDaMoeda && estoqueNaGaveta > 0) {
      trocoDevido -= valorDaMoeda;
      estoqueNaGaveta -= valorDaMoeda;
      valorUsadoDestaMoeda += valorDaMoeda;
    }
    if (valorUsadoDestaMoeda > 0) {
      trocoParaDevolver.push([nomeDaMoeda, valorUsadoDestaMoeda / 100]); 
    }
  }
  if (trocoDevido > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: trocoParaDevolver};
}