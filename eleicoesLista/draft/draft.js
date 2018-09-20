/* const TSEResponse = (url, estadoOuBr) => {

  axios.get(url)
    .then((response) => {
      localStorage.setItem(estadoOuBr, JSON.stringify(response.data.cand))
      console.log(response.data.cand)
    })
    .catch(err => console.log(err));

} */

/* TSEResponse(urlBRpres, 'PresidenteBR'); */
/* 
setInterval(
  () => {
    // Resposta JSON para cargo de Presidente
    TSEResponse(urlBRpres, 'PresidenteBR');
    TSEResponse(urlACpres, 'ACpresidente');
    TSEResponse(urlPApres, 'PApresidente');
    TSEResponse(urlESpres, 'ESpresidente');
    TSEResponse(urlDFpres, 'DFpresidente');
    TSEResponse(urlSCpres, 'SCpresidente');
    TSEResponse(urlPRpres, 'PRpresidente');

    // Resposta JSON para cargo de Governador

    TSEResponse(urlACgov, 'ACgov');
    TSEResponse(urlPAgov, 'PAgov');
    TSEResponse(urlESgov, 'ESgov');
    TSEResponse(urlDFgov, 'DFgov');
    TSEResponse(urlSCgov, 'SCgov');
    TSEResponse(urlPRgov, 'PRgov');

  }, 10000);


console.log('dados', JSON.parse(localStorage.getItem('PresidenteBR')));

let resposta = JSON.parse(localStorage.getItem('PresidenteBR')).sort(function (
  obj1,
  obj2
) {
  return obj1.seq - obj2.seq;
}) */


/* const getEleitos = (estadoOuBr) => {
  // Sort an array of objects by numerical value
  JSON.parse(localStorage.getItem(estadoOuBr)).sort(function (
    obj1,
    obj2
  ) {
    return obj1.seq - obj2.seq;
  })

}


console.log("lista aqui", getEleitos('PresidenteBR')); */


/* setInterval(() => {


  getEleitos('ACpresidente');
    getEleitos('PApresidente');
    getEleitos('ESpresidente');
    getEleitos('DFpresidente');
    getEleitos('SCpresidente');
    getEleitos('PRpresidente');
  
  
    getEleitos('ACgov');
    getEleitos('PAgov');
    getEleitos('ESgov');
    getEleitos('DFgov');
    getEleitos('SCgov');
    getEleitos('PRgov'); 
  resposta = JSON.parse(localStorage.getItem('PresidenteBR')).sort(function (
    obj1,
    obj2
  ) {
    return obj2.seq - obj1.seq;
  })

}, 5000); */