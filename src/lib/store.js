import { writable } from 'svelte/store'
function createTree() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set: (newTree) => {
			set(newTree)
			fetch("http://localhost:5173/api", {
				method: "POST",
				body: JSON.stringify({
					newTree: newTree
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			}).then((response) => response.json())
				.then((json) => console.log(json))
		},
		add: (element) => {
			var completeTree;
			update((n) => {
				completeTree = [...n, element]
				return completeTree
			})
			fetch("http://localhost:5173/api", {
				method: "POST",
				body: JSON.stringify({
					completeTree
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			}).then((response) => response.json())
				.then((json) => console.log(json))
		}
	}
}

export const tree = writable([])
