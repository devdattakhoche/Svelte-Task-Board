<script>
  import TodoCard from "./todoCard.svelte";
  import { todos } from "./store";
</script>


  {#each $todos as item}
    <TodoCard {item} />
  {/each}

