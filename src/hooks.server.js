import { start_mongo, toJson } from "$db/mongo"
import { users } from "$db/users"
import { redirect } from "@sveltejs/kit"
start_mongo().then(() => {
	console.log('Mongo Started')
}).catch(e => {
	console.error(e)
})

const unprotectedRoutes = ["/", "/sign-in", "/login", "/register"]

export async function handle({ event, request, resolve }) {
	const query = event.url.searchParams.get('signout')
	if (Boolean(query) == true) {
		await event.cookies.delete('session_id')
		event.locals.user = {
			isAuthenticated: false,
			username: null,
			id: null
		}
		throw redirect(303, '/')
	}
	const session_id = event.cookies.get('session_id')
	if (session_id) {
		const user = await toJson(await users.findOne({ 'session_id': session_id }))
		event.locals.user = {
			isAuthenticated: user !== null,
			username: user.username,
			id: user._id
		}
	} else {
		event.locals.user = {
			isAuthenticated: false,
			username: null,
			id: null,
		}
		if (!unprotectedRoutes.includes(event.url.pathname)) {
			console.log("REDIRECTING")
			throw redirect(303, '/')
		}
	}
	return await resolve(event)
}
