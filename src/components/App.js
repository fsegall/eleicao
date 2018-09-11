import React, { Component } from 'react';
import { HeaderContainer, Header } from './layout/partialHeader';
import Estados from './estados.js';
import { BarraContainer, EstadoSelecionado, SenadorVotos, UrnasVotos } from './barraResultadoSenadores';
import { ResultadoSenadoresContainer, SenadorPrimeiro, SenadorSegundo, SenadorTerceiro, SenadorQuarto, Separador } from './resultadoSenador';
import { DemaisCandidatosContainer, DemaisCandidatos } from './demaisCandidatos';
import SenadorBox from './senador';
import { ContainerResultados, NomeGovernador, ContainerGovernador, ContainerPresidente, QuadroPresGov, GovernadorFoto2, GovPresDemaisCandidatos, FlexTest } from './resultadoPresidente_Governador';
import CandidatoBox from './candidatosBox';

import styled from 'styled-components';



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
              votos="826.576"
            />
          </SenadorPrimeiro>

          <SenadorSegundo>
            <SenadorBox
              eleito="sim"
              nome="Joana Silva"
              partido="PMDB"
              percentual="18.92"
              votos="826.576"
            />
          </SenadorSegundo>

          <SenadorTerceiro>
            <SenadorBox
              nome="José Silva"
              partido="PDT"
              percentual="15.34"
              votos="269.791"
            />
          </SenadorTerceiro>

          <SenadorQuarto>
            <SenadorBox
              nome="Maria Silva"
              partido="Rede"
              percentual="15.07"
              votos="265.562"
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

            <FlexTest>
              <QuadroPresGov />
              <CandidatoBox
                nome="João Silva"
                partido="PSDB"
                percentual="30.00"
                votos="5000"
              />
            </FlexTest>

            <FlexTest>
              <GovernadorFoto2>
                <QuadroPresGov />
              </GovernadorFoto2>
              <CandidatoBox
                nome="João Silva"
                partido="PSDB"
                percentual="30.00"
                votos="5000"
              />
            </FlexTest>

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
