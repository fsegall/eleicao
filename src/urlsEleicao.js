// Função para construção de URLs

export function construirUrls(cargo) {

  const Ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  let AllUrls = {};

  Ufs.map((uf) => {
    const keyUf = uf.toLowerCase();
    return AllUrls = { ...AllUrls, [keyUf]: `https://www12.senado.leg.br/_app/apuracao/ag/${keyUf}/${cargo}.json` }
  })

  return AllUrls;
}