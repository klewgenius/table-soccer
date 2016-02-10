import {Map} from 'immutable';
import {Vote, setEntries} from './src/core';

export default function reducer(state = Map(), action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'VOTE':
    return vote(state, action.score)
  }
  return state;
}
