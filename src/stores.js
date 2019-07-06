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
		// remove all redo states
		if (this.canRedo()) 
			this.history.splice(this.current + 1);
		
		// add a new state
		this.current++;
		this.history.push(state);
	}
	
	canUndo() {
		return this.current > 0;
	}
	
	canRedo() {
		return this.current < this.history.length - 1;
	}
	
	undo() {
		if (this.canUndo())
			this.current--;
	}
	
	redo() {
		if (this.canRedo())
			this.current++;
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
		undo: () => update(h => { h.undo(); return h; }),
		redo: () => update(h => { h.redo(); return h; }),
	};
}

export const history = createHistory();