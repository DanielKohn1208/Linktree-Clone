export const load = async ({request, locals, parent, depends}) => {
	depends("data:auth")
	console.log("IS USER LOGGED IN?")
	console.log(locals.user.isAuthenticated)
	return { user: locals.user}
}
