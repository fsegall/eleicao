import React, { Component } from 'react';
import { HeaderContainer, Header, NavTabEstados } from './layout/partialHeader';
import Estados from './estados.js';
import { BarraContainer, EstadoSelecionado, SenadorVotos, UrnasVotos } from './barraResultadoSenadores';
import { ResultadoSenadoresContainer, SenadorPrimeiro, SenadorSegundo, SenadorTerceiro, SenadorQuarto, SenadorQuadroFoto, NomeSenador, PartidoSenador, PercentualSenador, VotosSenador, Separador } from './resultadoSenador';
import { DemaisCandidatosContainer, DemaisCandidatos } from './demaisCandidatos';
import SenadorBox from './senador';
import { ContainerResultados, NomeGovernador, NomePresidente, ContainerGovernador, ContainerPresidente, QuadroPresGov, ContainerTeste, GovernadorFoto2, GovPresDemaisCandidatos, FlexTest } from './resultadoPresidente_Governador';


import styled from 'styled-components';
import CandidatoBox from './candidatosBox';


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <HeaderContainer>
          <Header>Eleições 2018 - Resultados</Header>
        </HeaderContainer>
        <Estados />
        <BarraContainer>
          <EstadoSelecionado>
            DF
          </EstadoSelecionado>

          <SenadorVotos>
            <span>Senador</span>
            <p>1.895.697 eleitores</p>
          </SenadorVotos>
          <UrnasVotos>
            <span>100,00%</span>
            <p>Urnas Apuradas</p>
          </UrnasVotos>

        </BarraContainer>

        <ResultadoSenadoresContainer>
          <SenadorPrimeiro>
            <SenadorBox
              eleito="sim"
              nome="João Silva"
              partido="PPS"
              percentual="57.61"
              votos="826.576 votos"
            />
          </SenadorPrimeiro>

          <SenadorSegundo>
            <SenadorBox
              eleito="sim"
              nome="Joana Silva"
              partido="PMDB"
              percentual="18.92"
              votos="826.576 votos"
            />
          </SenadorSegundo>

          <SenadorTerceiro>
            <SenadorBox
              nome="José Silva"
              partido="PDT"
              percentual="15.34"
              votos="269.791 votos"
            />
          </SenadorTerceiro>

          <SenadorQuarto>
            <SenadorBox
              nome="Maria Silva"
              partido="Rede"
              percentual="15.07"
              votos="265.562 votos"
            />
          </SenadorQuarto>

        </ResultadoSenadoresContainer>

        <DemaisCandidatosContainer>
          <DemaisCandidatos />
        </DemaisCandidatosContainer>

        <Separador />

        <ContainerResultados>

          <ContainerGovernador>
            <NomeGovernador>
              Governador
            </NomeGovernador>

            <CandidatoBox
              nome="José Silva"
              partido="PT"
              percentual="30.00"
              votos="25000"
            >Hello flex!</CandidatoBox>


            <GovernadorFoto2> <QuadroPresGov /></GovernadorFoto2>
            <GovPresDemaisCandidatos>
              <DemaisCandidatosContainer>
                <DemaisCandidatos />
              </DemaisCandidatosContainer>
            </GovPresDemaisCandidatos>

          </ContainerGovernador>


          <ContainerPresidente>
            oi
          </ContainerPresidente>

        </ContainerResultados>

      </React.Fragment>
    );
  }
}

export default App;
