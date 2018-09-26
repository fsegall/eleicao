export const Selecionar = "SELECIONAR";
export const Urls = "URLS";
import { urlSenadores, urlGovernadores, urlPresidente } from '../urlsEleicao';
import axios from 'axios';


export function selecionarEstado(uf) {



  const requisicaoSenadores = axios.get(urlSenadores.uf);
  const requisicaoGovernadores = axios.get(urlGovernadores.uf);
  const requisicaoSenadores = axios.get(urlPresidente.uf);

  return {
    type: Selecionar,
    payload: {
      selecionado: uf,
      Senadores: requisicaoSenadores,
      Governadores: requisicaoGovernadores,
      Presidente: requisicaoPresidente

    }
  }
}


axios.get(urlSenadores.uf)
  .then((response) => {
    /*         console.log(response.data.cand);
            console.log('ok'); */
    this.setState({
      eleicaoPresidenteDF: response.data,
      presidenteDF: response.data.cand.sort(function (
        obj1,
        obj2
      ) {
        return obj1.seq - obj2.seq;
      }),
      isLoading: false
    })
  })
  .catch(err => console.log(err));