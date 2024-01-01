import { users } from '$db/users';
import { ObjectId } from 'mongodb';

export const load = async function({ request, locals, parent, depends }) {
	const { user } = await parent();
	const userInfo = await users.findOne({ _id: new ObjectId(user.id) });
	console.log(userInfo.linktree);
	const linktree = userInfo.linktree === undefined ? [] : userInfo.linktree;
	const deploy = userInfo.deploy === true ? true : false;
	console.log("THE VALUE OF DEPLOY IS:" + deploy)
	return { linktree: linktree, isDeployed: deploy };
};

export const actions = {
	setDeployTrue: async (event) => {
		const session_id = event.cookies.get('session_id');
		const result = await users.updateOne({ session_id: session_id }, { $set: { deploy: true} });
		return {success:true}
	},
	setDeployFalse: async (event) => {
		const session_id = event.cookies.get('session_id');
		const result = await users.updateOne({ session_id: session_id }, { $set: { deploy: false} });
		return {success:true}
	}
};
