import {
  SET_TURN,
  REQUEST_DATA,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_SHOW_SHOPPING,
  INCREMENT_SCORE,
  SET_SCORE,
} from './constants';

export const setTurn = turn => ({
  type: SET_TURN,
  turn,
});

export const setScore = (amount = 0) => ({
  type: SET_SCORE,
  amount,
});

export const incrementTurn = amount => ({
  type: INCREMENT_TURN,
  amount,
});

export const incrementScore = (amount = 1) => ({
  type: INCREMENT_SCORE,
  amount,
});

export const decrementTurn = (amount = 1) => ({
  type: DECREMENT_TURN,
  amount,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const setShowShopping = isShowShopping => ({
  type: SET_SHOW_SHOPPING,
  isShowShopping,
});
