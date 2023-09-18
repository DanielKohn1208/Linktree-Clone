import {users} from "$db/users"
import {json} from "@sveltejs/kit"

export async function POST({request, cookies}) {
	const json = await request.json();
	console.log("THIS IS THE SERVER")
	console.log(json)
	const session_id = cookies.get('session_id')
	await users.updateOne({session_id: session_id},{$set:{linktree: json.tree}})
	return json("success")
}
