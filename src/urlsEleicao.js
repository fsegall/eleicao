
const Ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

// Função para construção de URLs

const construirUrls = (cargo) => {

  let AllUrls = {};

  Ufs.map((uf, index) => {
    const keyUf = uf.toLowerCase();
    return AllUrls = { ...AllUrls, [keyUf]: `https://www12.senado.leg.br/_app/apuracao/ag/${keyUf}/${cargo}.json` }
  })

  return AllUrls;
}

export const UrlSenadores = construirUrls('senador');

export const UrlGovernadores = construirUrls('governador');

export const UrlPresidente = construirUrls('presidente');


/* console.log('Senadores', UrlSenadores);

console.log('Governadores', UrlGovernadores);

console.log('Presidente', UrlPresidente);  */
