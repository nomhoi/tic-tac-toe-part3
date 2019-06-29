import { writable } from 'svelte/store';

function createState() {
	const { subscribe, set, update } = writable(Array(9).fill('O'));

	return {
		subscribe,
		state1: () => update(n => Array(9).fill('1')),
		state2: () => update(n => Array(9).fill('2')),
	};
}

export const state = createState();