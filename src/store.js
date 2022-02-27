import { writable } from "svelte/store";

const itemName = "taskStorage"
const retrieved = localStorage.getItem(itemName)
const parsed = JSON.parse(retrieved)
export const tasks = writable(parsed === null ? [] : parsed)

tasks.subscribe(value =>
  localStorage.setItem(itemName, JSON.stringify(value))
)