const initialState = {
  selecionado: 'DF',
  Senadores: {},
  Governadores: {},
  Presidente: {},
  PresidenteBR: {}
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "SELECIONAR") {
    return {
      ...state,
      selecionado: action.payload.selecionado,
      urlSenadores: action.payload.Senadores,
      urlGovernadores: action.payload.Governadores,
      urlPresidente: action.payload.Presidente
    };
  }
  return state;
};

export default rootReducer;

