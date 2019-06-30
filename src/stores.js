import { writable } from 'svelte/store';

function createState() {
	const { subscribe, set, update } = writable(Array(9).fill('O'));

	return {
		subscribe,
		state1: () => set(Array(9).fill('1')),
		state2: () => set(Array(9).fill('2')),
		setCell: (i) => update(a => {a[i] = 'X'; return a;}),
	};
}

export const state = createState();