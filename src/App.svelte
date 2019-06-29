<script>
	import Board from './Board.svelte';
	import { state } from './stores.js';
</script>

<div class="game">
    <div class="game-board">
        <Board />
    </div>
    <div class="game-info">
		<div class="status">Next player: X</div>
        <div>
			<button on:click={state.state1}>State 1</button>
			<button on:click={state.state2}>State 2</button>
		</div>
        <ol></ol>
    </div>
</div>

<style>
    .game {
        font: 14px "Century Gothic", Futura, sans-serif;
        margin: 20px;
        display: flex;
        flex-direction: row;
    }

    .game-info {
        margin-left: 20px;
    }

    .status {
        margin-bottom: 10px;
    }   

    ol {
        padding-left: 30px;
    }
</style>