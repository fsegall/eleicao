// Função para construção de URLs

export function construirUrls(cargo, eleicao) {

  const Ufs = ['BR', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  let AllUrls = {};

  Ufs.map((uf) => {
    const keyUf = uf.toLowerCase();
    return AllUrls = { ...AllUrls, [keyUf]: `http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/${eleicao}/dadosdivweb/${keyUf}/${keyUf}-c${cargo}-e000${eleicao}-w.js` }
  })
  console.log("cargo", cargo);

  return AllUrls;
}

/* http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/295/dadosdivweb/br/br-c0001-e000295-w.js

http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/297/dadosdivweb/df/df-c0005-e000297-w.js
 
 export function construirUrlsImagens() {
`https://www12.senado.leg.br/_app/apuracao/ag/${keyUf}/${cargo}.json`


} */