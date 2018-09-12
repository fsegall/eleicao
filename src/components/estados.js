import React, { Component } from 'react';
import { EstadosItem, EstadosItemSelected } from './layout/partialHeader';
import { NavTabEstados } from './layout/partialHeader';

const Estados = () => {
  return (
    <NavTabEstados>
      <EstadosItem>
        AC
      </EstadosItem>
      <EstadosItem>
        AL
      </EstadosItem>
      <EstadosItem>
        AM
      </EstadosItem>
      <EstadosItem>
        AP
      </EstadosItem>
      <EstadosItem>
        BA
      </EstadosItem>
      <EstadosItem>
        CE
      </EstadosItem>
      <EstadosItem selecionado="sim">
        DF
      </EstadosItem>
      <EstadosItem>
        ES
      </EstadosItem>
      <EstadosItem>
        GO
      </EstadosItem>
      <EstadosItem>
        MA
      </EstadosItem>
      <EstadosItem>
        MG
      </EstadosItem>
      <EstadosItem>
        MS
      </EstadosItem>
      <EstadosItem>
        MT
      </EstadosItem>
      <EstadosItem>
        PA
      </EstadosItem>
      <EstadosItem>
        PB
      </EstadosItem>
      <EstadosItem>
        PE
      </EstadosItem>
      <EstadosItem>
        PI
      </EstadosItem>
      <EstadosItem>
        PR
      </EstadosItem>
      <EstadosItem>
        RJ
      </EstadosItem>
      <EstadosItem>
        RN
      </EstadosItem>
      <EstadosItem>
        RR
      </EstadosItem>
      <EstadosItem>
        RS
      </EstadosItem>
      <EstadosItem>
        SC
      </EstadosItem>
      <EstadosItem>
        SE
      </EstadosItem>
      <EstadosItem>
        SP
      </EstadosItem>
      <EstadosItem>
        TO
      </EstadosItem>
    </NavTabEstados>
  )
}

export default Estados;