import { fail, redirect } from '@sveltejs/kit'
import { users, updateSession } from "$db/users"
import { toJson, } from "$db/mongo"
import { v4 as uuidv4 } from 'uuid'

export const actions = {
	register: async ({ cookies, request }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		if (username.length < 2 && password.length < 2) {
			return fail(422, {
				description: "USERNAME AND PASSWORD MUST HAVE MORE THAN 2 CHARACTERS",
				error: "USERNAME AND PASSWORD MUST HAVE MORE THAN r CHARACTERS"
			})
		}
		const userExist = await users.find({ username: username }).toArray()
		if (userExist.length > 0) {
			return fail(422, {
				description: "A USER WITH THAT USERNAME ALREADY EXISTS",
				error: "A USER WITH THAT USERNAME ALREADY EXISTS"
			})
		}
		const session_id = uuidv4()
		await users.insertOne({ username: username, password: password, session_id: session_id })
		cookies.set('session_id', session_id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: 60 * 60 * 24 * 7 // one week
		})
		throw redirect(303, "/protected")
	}
}
