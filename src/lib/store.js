import { writable } from 'svelte/store'
function createTree(){
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		set: (newTree)=>{
			set(newTree)
			fetch("http://localhost:5173/api", {
				method: "POST",
				headers: {
					'Accept': 'application/json',
				}
			})
		}
	} 
}

export const tree = writable([])
