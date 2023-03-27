import ACTIONS from './actions';

const { FETCH_DATA } = ACTIONS;

function redcucer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA:
      return { ...state, articles: payload.articles };
    default:
      return state;
  }
}

export default redcucer;
