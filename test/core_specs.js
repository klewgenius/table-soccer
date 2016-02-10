import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, Vote} from '../src/core';

describe('Testing application logic (core.js)', () => {

  describe('setEntries method', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Andrés', 'José', 'Luis');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        initialEntries: List.of('José', 'Luis'),
        personToVote: 'Andrés'
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['José', 'Luis', 'Pepe'];
      const nextState = setEntries(state, entries);
      expect(nextState.get('initialEntries')).to.equal(
        List.of('Luis', 'Pepe')
        );
    });

  });
  

  describe('vote method', () => {

    let nextState;

    beforeEach(function() {
      const state = Map();
      const entries = ['José', 'Luis', 'Pepe'];
      nextState = setEntries(state, entries);
    });

    
    it('correct first Vote (José=5ptos)', () => {

      const state_1 = Vote(nextState, 5);

      expect(state_1).to.equal(
        Map({
          'initialEntries': List.of('Pepe'),
          'personToVote': 'Luis',
          'votedEntries': Map({'José': 5 })
        })
        );

    });

    it('correct last Vote (José=5ptos and Luis=7 and Pepe=2)', () => {
      const state_1 = Vote(nextState, 5);
      const state_2 = Vote(state_1, 7);
      const state_3 = Vote(state_2, 2);


      expect(state_3).to.equal(Map({
          'votedEntries': Map({'José': 5, 'Luis': 7, 'Pepe': 2})
        }));


    });

    it('when there is nothing else to vote', () => {
      const state_1 = Vote(nextState, 5);
      const state_2 = Vote(state_1, 3);
      const state_3 = Vote(state_2, 1);

      const state_4 = Vote(state_3, 6); //nothing to vote here
      
      expect(state_4).to.equal(
        Map({
          'votedEntries': Map({'José': 5, 'Luis': 3, 'Pepe': 1})
        })
        );

    });

  });

});
