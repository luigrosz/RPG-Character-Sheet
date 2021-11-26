import { CHARACTER } from '../actions';

const initalState = {
  character:{
    name: '',
  }
};

function reducerMainPage(state = initalState, action) {
  switch (action.type) {
    case CHARACTER:
    return {
      ...state, 
      character: {
        name: action.characterDataObj.name,
      }
    }
  default:
    return state;
  }
}

export default reducerMainPage;