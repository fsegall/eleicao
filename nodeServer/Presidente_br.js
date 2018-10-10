
const axios = require('axios')
const fs = require('fs');

axios.get('http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/297/dadosdivweb/br/br-c0001-e000297-w.js')
  .then((response) => fs.writeFile(`./Presidente_br.json`, JSON.stringify(response.data), (err) => {
    if (err) throw err;
    console.log(`Arquivo json dos resultados para Presidente br foi criado.`)


  }))
  .catch((err) => console.log(err));

