import * as types from '../constants/ActionTypes'
// action creators
export const changePiecePos = (id, oldPos, newPos) => {
  return {
    type: types.CHANGE_PIECE_POS,
    oldPos,
    newPos,
    id
  }
}

export const addPiece = (id, pos, num, isAnimationNeed) => {
  return {
    type: types.ADD_PIECE,
    pos,
    id,
    num,
    isAnimationNeed
  }
}

export const delPiece = (id, pos) => {
  return {
    type: types.DEL_PIECE,
    id,
    pos
  }
}