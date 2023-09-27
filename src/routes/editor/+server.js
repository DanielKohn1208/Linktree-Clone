import {users} from "$db/users"
import {json} from "@sveltejs/kit"
import { v4 as uuidv4 } from 'uuid'

// NOTE: NEEDS TO BE SECURED, ANY USER CAN MAKE A CHANGE!!!!
export async function POST({request, cookies}) {
	const {tree}= await request.json();
	const session_id = cookies.get('session_id')
	await users.updateOne({session_id: session_id},{$set:{linktree: tree}})
	return json("success")
}
