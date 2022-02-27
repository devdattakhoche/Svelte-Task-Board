<script>
  import TaskCard from "./taskCard.svelte";
  import { tasks } from "../store";
</script>


  {#each $tasks as item}
    <TaskCard {item} />
  {/each}

