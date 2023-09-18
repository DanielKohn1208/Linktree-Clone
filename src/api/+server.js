import {users} from "$db/users"
import {json} from "@sveltejs/kit"

export async function POST({request, cookies}) {
	const json = await request.json();
	const session_id = cookies.get('session_id')
}
