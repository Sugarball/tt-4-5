import { ADD_MSG } from '../constants/ActionTypes'

const initialState = {
  msgList: [
    {
      msg: 'hello, it\'s me',
    },
    {
      msg: 'i was wondering if after all these years you\'d like to meet',
    }
  ]
}

export function chat(state = initialState, action) {
  switch (action.type) {

      case ADD_MSG:
          return {...state, msgList: [...state.msgList, {msg: action.payload}]};

      default:
          return state;
  }
}
