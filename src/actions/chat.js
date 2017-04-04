import {  INIT_MSG } from "../constants/ActionTypes"

export function initMsg(msgs){
  return {
      type : INIT_MSG,
      payload: msgs,
  }
}
