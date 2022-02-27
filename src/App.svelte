<script>
  import Todo_list from "./todos.svelte";
  import { todos } from "./store.js";
  const add_todo = () => {
    const todo_text = document.getElementById("title").value;

    console.log(todo_text)
    if (!todo_text) {
      alert("Oops!! It seems that the Task is Empty");
      return;
    }

    const todo = {
      id: Date.now().toString(36),
      title: todo_text,
    };

    $todos = [...$todos, todo];

    document.getElementById("title").value = "";    
  };

  // const stored = localStorage.content
// or localStorage.getItem('content')

  // Set the stored value or a sane default.
  // export const content = writable(stored || 'Hello, World!')

  // Anytime the store changes, update the local storage value.
  // content.subscribe((value) => localStorage.content = JSON.stringify(value))

  const pressEnter = (e) =>{
    if(e.code == 'Enter')
      add_todo()
  }
</script>

<div class="input-center">
  <h1>Hey everyone 👋👋</h1>
  <h3>This is Draggable Task Board 🎉</h3>
  <small
    >Made by <a target="blank" href="https://devsblog.hashnode.dev/"
      >@devdattakhoche</a
    ></small
  >

  <br />
  <div>
    <input id="title" type="text" placeholder="Enter note or Task or ...." size="20" on:keydown={pressEnter} />
    <button on:click={add_todo}>Add Task</button>
  </div>
  <br />

  {#if $todos.length > 0}
    <button on:click={() => ($todos = [])}>Delete all </button>
  {/if}

</div>
<Todo_list />

<style>
  :global(body) {
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #24243e,
      #302b63,
      #0f0c29
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #24243e,
      #302b63,
      #0f0c29
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  h3 {
    color: yellow;
  }

  h1,
  small {
    color: white;
  }

  a {
    color: aqua;
    text-decoration: none;
  }

  input {
    /* border-radius: 10px; */
    border: 0;
    color: white;
    font-size: 1.3em;
    background-color: transparent;
    padding: 0.5em;
    border-bottom: 2px solid black;
  }

  input:hover {
    transform: scale(1.001, 1.001);
    transition: all 00.5s;
    outline: none;
    border-bottom: 2px solid white;
  }

  input:focus {
    /* outline: none; */
    transform: scale(1.001, 1.001);
    transition: all 00.5s;
    outline: none;
    border-bottom: 2px solid yellow;
  }

  input::placeholder {
    color: wheat;
  }

  button {
    border: 1;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    background-color: transparent;
    padding: 0.5em;
  }

  .input-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
  }
</style>
