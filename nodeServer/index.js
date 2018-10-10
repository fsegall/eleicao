const axios = require('axios')
const fs = require('fs');

function construirUrls(cargo, eleicao) {

  const Ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'];

  let AllUrls = {};

  Ufs.map((uf) => {
    const keyUf = uf.toLowerCase();
    return AllUrls = { ...AllUrls, [keyUf]: `http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/${eleicao}/dadosdivweb/${keyUf}/${keyUf}-c${cargo}-e000${eleicao}-w.js` }
  })

  return AllUrls;
}

const UrlSenadores = construirUrls('0005', '297');
const UrlGovernadores = construirUrls('0003', '297');
const UrlPresidente = construirUrls('0001', '295');


async function buscarJson(urls, cargo) {
  for (let uf in urls) {

    let request = await axios.get(urls[uf])
      .then((response) => fs.writeFile(`./${cargo}_${uf}.json`, JSON.stringify(response.data), (err) => {
        if (err) throw err;
        console.log(`Arquivo json do ${uf} foi criado.`)
      }))
  }
};

buscarJson(UrlSenadores, 'Senadores');
buscarJson(UrlGovernadores, 'Governadores');
buscarJson(UrlPresidente, 'Presidente');






