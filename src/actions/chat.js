import {  ADD_MSG } from "../constants/ActionTypes"

export function addMsg(msg){
  return {
      type : ADD_MSG,
      payload: msg,
  }
}
