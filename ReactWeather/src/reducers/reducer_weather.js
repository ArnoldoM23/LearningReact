import { FETCH_WEATHER } from '../actions/index'
// always remember to return a new state NOT mutate it
export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER:
			return [ action.payload.data, ...state];
	}

	return state;
}




function test(...args) {
	var terter = args;
	return terter[0];
}

test(1,2,3)
console.assert(test(1,2,3) === 1, {message:'expect 1'})