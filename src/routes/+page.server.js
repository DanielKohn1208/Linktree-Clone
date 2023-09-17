import {users} from "$db/users"

export const load = async function(){
	const data = await users.find().toArray();
	const parsedData = JSON.parse(JSON.stringify(data))
	return {
		users: parsedData
	}
}
