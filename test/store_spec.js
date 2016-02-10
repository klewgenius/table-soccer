import {Map, fromJS, List} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Andrés', 'Walter', 'Simpson', 'Lucas Sugo']
    });
    expect(store.getState()).to.equal(fromJS({
       "initialEntries": List.of('Walter', 'Simpson', 'Lucas Sugo'), 
       "personToVote": "Andrés" 
    }));
  });

});