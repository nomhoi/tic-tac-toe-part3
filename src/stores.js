import { writable } from 'svelte/store';

class History {
	constructor() {
		this.history = new Array;
		this.current = -1;
	}

	currentState() {
		return this.history[this.current];
	}

	push(state) {
		// TODO: remove all redo states
		this.current++;
		this.history.push(state);
	}
}

function createHistory() {
	const { subscribe, set, update } = writable(new History);

	return {
		subscribe,
		push: (state) => update(h => { h.push(state); return h; }),
		clickCell: (i) => update(h => { 
			// create a copy of the current state
			const state = h.currentState().slice();
			
			// change the value of the selected cell to X
			state[i] = 'X';

			// add the new state to the history
			h.push(state);

			console.log(h);
			return h;
		}),
	};
}

export const history = createHistory();