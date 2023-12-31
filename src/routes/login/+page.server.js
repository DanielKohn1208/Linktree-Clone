import { fail, redirect } from '@sveltejs/kit'
import { users, updateSession, isValidCredentials } from "$db/users"
import { toJson, } from "$db/mongo"
import { v4 as uuidv4 } from 'uuid'

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username')
		const password = data.get('password')
		if (username.trim().length === 0 || password.trim().length === 0) {
			return fail(422, {
				description: "MUST HAVE A USERNAME AND PASSWORD",
				error: "MUST HAVE A USERNAME AND PASSWORD"
			})
		}

		const valid = await isValidCredentials(username, password)
		console.log("IS THIS VALID: " + valid)
		if (!valid) {
			return fail(422, {
				description: "USERNAME AND PASSWORD MUST BE VALID",
				error: "USERNAME AND PASSWORD MUST BE VALID"
			})
		}

		const user = await users
			.find({ username: username})
			.toArray()
		const parsedUser = toJson(user[0])

		const session_id = uuidv4()
		await updateSession(parsedUser._id, session_id)
		cookies.set('session_id', session_id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: 60 * 60 * 24 * 7 // one week
		})
		throw redirect(303, "/protected")
	},
};
