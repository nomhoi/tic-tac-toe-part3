<script>
    import { onMount } from 'svelte';
    
    export let width  = 3;
    export let height = 3;
    export let cellWidth  = 34;
    export let cellHeight = 34;
    export let colorStroke = "#999";
    let boardWidth  = 1 + (width * cellWidth);
    let boardHeight = 1 + (height * cellHeight);
    let canvas;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, boardWidth, boardHeight);

        // draw board
        ctx.beginPath();
        
        // vertical lines
        for (let x = 0; x <= boardWidth; x += cellWidth) {
            ctx.moveTo(0.5 + x, 0);
            ctx.lineTo(0.5 + x, boardHeight);
        }
        
        // horizontal lines
        for (let y = 0; y <= boardHeight; y += cellHeight) {
            ctx.moveTo(0, 0.5 + y);
            ctx.lineTo(boardWidth, 0.5 +  y);
        }

        // draw the board
        ctx.strokeStyle = colorStroke;
        ctx.stroke();

        ctx.closePath();

        // draw cells
        ctx.beginPath();

        ctx.font = "bold 22px Century Gothic";
        let d = 8;
        for (let i = 0; i < height; i+=1) {
            for (let j = 0; j < width; j+=1) {
                ctx.fillText("O", j * cellWidth + d + 1, (i + 1) * cellHeight - d);
            }
        }

        ctx.closePath();
    });

</script>

<canvas
    bind:this={canvas}
    width={boardWidth}
    height={boardHeight}
></canvas>
