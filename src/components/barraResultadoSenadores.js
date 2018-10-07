import React from 'react';
import styled from 'styled-components';
import BarraDeProgresso from './barraDeProgresso';

//
// Padrão Usado no Arquivo
// Container
// Subcomponentes
// Componentes Completos
// 

//Containers de Grid

const BarraContainer = styled.div`
  display: flex;
  margin: 2rem 0 2rem 0;
  flex-wrap: wrap;
  progress {
    width: 100%;
    margin-top: 0.8rem;
  }
`
// Subcomponentes

const EstadoSelecionado = styled.div`
  border: 1px solid #ccc;
  align-self: center;
  justify-self: center;
  padding: 1rem;
  font-size: 3rem;
  color: #484848;
  text-transform: uppercase;
`
const SenadorVotos = styled.div`
  color: #484848;
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  flex-grow: 1;
  display: inline-block;

  span {
    font-size: 1rem;
  }

  div.eleitores {
    display: inline-block;
  }
  div.urnas {
    text-align: right;
    float: right;
  }
`
// Componente Completo

const BarraSenador = ({ uf, eleicaoDados }) => {
  console.log("uf é", uf);
  if (uf === 'br') {
    return (
      <BarraContainer>

        <EstadoSelecionado>
          {uf}
        </EstadoSelecionado>

        <SenadorVotos>

          <div className="eleitores">
            <h1>Presidente</h1>
            <span>{`${eleicaoDados.tv} votos`}</span>
          </div>

          <div className="urnas">
            <h1>Urnas Apuradas</h1>
            <span>{eleicaoDados.ea / eleicaoDados.e * 100}</span>
          </div>

          <BarraDeProgresso percentual="100" uf={uf} />

        </SenadorVotos>

      </BarraContainer>
      /*       <BarraContainer>
      
              <EstadoSelecionado>
                {uf}
              </EstadoSelecionado>
      
              <SenadorVotos>
      
                <div className="eleitores">
                  <h1>Presidente</h1>
                  <span>{eleicaoDados.tv}</span>
                </div>
      
                <div className="urnas">
                  <h1>Urnas Apuradas</h1>
                  <span>{eleicaoDados.ea / eleicaoDados.e * 100}</span>
                </div>
      
                <BarraDeProgresso percentual="100" uf={uf} />
      
              </SenadorVotos>
      
            </BarraContainer> */

    );
  }

  return (

    <BarraContainer>

      <EstadoSelecionado>
        {uf}
      </EstadoSelecionado>

      <SenadorVotos>

        <div className="eleitores">
          <h1>Senador</h1>
          <span>{`${eleicaoDados.tv} votos`}</span>
        </div>

        <div className="urnas">
          <h1>Urnas Apuradas</h1>
          <span>{eleicaoDados.ea / eleicaoDados.e * 100}</span>
        </div>

        <BarraDeProgresso percentual={eleicaoDados.ea / eleicaoDados.e * 100} uf={uf} />

      </SenadorVotos>

    </BarraContainer>



  )
}

export default BarraSenador;