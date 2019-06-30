import { writable } from 'svelte/store';

class History {
	constructor() {
		this.history = new Array;
		this.current = 0;
		this.history[this.current] = Array(9).fill('Y');
	}

	currentState() {
		return this.history[this.current];
	}

	push(state) {
		this.current++;
		this.history.push(state);
	}
}

function createHistory() {
	const { subscribe, set, update } = writable(new History);

	return {
		subscribe,
		push: (state) => update(h => { h.push(state); return h; }),
		//setCell: (i) => update(a => {a[i] = 'X'; return a;}),
	};
}

export const history = createHistory();