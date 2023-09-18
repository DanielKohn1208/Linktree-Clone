import { users } from '$db/users';
import { ObjectId } from 'mongodb';

export const load = async function ({ request, locals, parent, depends }) {
	const { user } = await parent();
	const userInfo = await users.findOne({ _id: new ObjectId(user.id) });
	console.log(userInfo.linktree)
	const linktree = userInfo.linktree === undefined ? []: userInfo.linktree 
	console.log(linktree)
	return { linktree: linktree};
};
