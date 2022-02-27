import { writable } from "svelte/store";

// export let last_id = writable(2);

const itemName = "storedArray"
const retrieved = localStorage.getItem(itemName)
const parsed = JSON.parse(retrieved)
export const todos = writable(parsed === null ? [] : parsed)

todos.subscribe(value =>
  localStorage.setItem(itemName, JSON.stringify(value))
)