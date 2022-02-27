
<script>

	export let left =Math.random()*100 + Math.random()*500 ;	
	export let top = Math.random()*100 + Math.random()*500 ;
	let moving = false; 


	function start(e) {
		moving = true;
	}
	 
	function stop(e) {
		moving = false;
	}
	
	function move(e) {

			if (moving) {
                
				left += e.movementX;
				top += e.movementY;
			}
	}
	
</script>

<style>
	.draggable {
		position: absolute;
		cursor:-webkit-grabbing
	}
</style>

<svelte:window on:mouseup={stop} on:mousemove={move}  />

<section on:mousedown={start} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>




