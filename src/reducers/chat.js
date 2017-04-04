import { INIT_MSG } from '../constants/ActionTypes'

const initialState = {
  msgList: []
}

export function chat(state = initialState, action) {
  switch (action.type) {

    case INIT_MSG: 
      let msgList = []
      for (let i in action.payload.msgs) {
        msgList.push(action.payload.msgs[i])
      }
      return {...state, msgList};

    default:
      return state;
  }
}
