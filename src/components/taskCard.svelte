<script>
  import Draggable from "./Draggable.svelte";
  import { tasks } from "../store";

  export let item;

  const deleteTodo = (id) => {
    $tasks = $tasks.filter((item) => {
      return item.id != id;
    });
  };

  var color = generateLightColorHex();

  function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += (
        "0" +
        Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
      ).slice(-2);
    return color;
   }
</script>

<Draggable>
  <div class="card" style="--background-color: {color}">
    <i on:click={() => deleteTodo(item.id)} class="fa-solid fa-circle-xmark" />
    <div class="container">
      <p>{item.title}</p>
    </div>
  </div>
</Draggable>

<style>
  .card {
    border-bottom: 3px solid red;
    border-radius: 10px;
    background-color: var(--background-color);
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 215px;
    min-width: 100px;
    overflow-wrap: break-word;
  }

  p {
    margin-top: 20px;
  }

  .container {
    padding: 2px 16px;
  }

  i {
    margin: 3px;
    float: right;
  }

  i:hover {
    cursor: pointer;
  }
</style>
