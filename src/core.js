import {List, Map, Iterable} from 'immutable';

export function setEntries(state, entries) {
	const initialListOfPersons = List(entries);
	return state.merge({
		'initialEntries': initialListOfPersons.skip(1),
		'personToVote': initialListOfPersons.first()
	});
}

export function Vote(state, score){
	if(!state.has('initialEntries'))
		return state;

	const listOfPerson = state.get('initialEntries');
	const person = state.get('personToVote');
	if(person === '') return state;

	let votedEntries = state.has('votedEntries') ? state.get('votedEntries'):  new Map();
	votedEntries = votedEntries.set(person, score);

	if(listOfPerson.count() > 0){
		return state.merge({
			'initialEntries':  listOfPerson.skip(1),
			'personToVote': listOfPerson.count() > 0 ? listOfPerson.first() : '',
			'votedEntries': votedEntries
		});	
	}else{
		return state.remove('personToVote')
				.remove('initialEntries')
				.set('votedEntries', votedEntries);
	
	}
	

}