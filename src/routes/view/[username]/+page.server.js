import { users } from '$db/users';
import { ObjectId } from 'mongodb';
import { error } from "@sveltejs/kit"

export const load = async function({ request, locals, parent, depends, params}) {
	const wantsTree = await users.findOne({username: params.username})
	if(wantsTree === null){
		throw error (404, "This user's linktree is unavailable to view")
	}

	const isAvailable = wantsTree.deploy === true ? true : false;
	if (!isAvailable){
		throw error (404, "This user's linktree is unavailable to view")
	}

	const linktree = wantsTree.linktree === undefined ? [] : wantsTree.linktree;

	return {linktree: linktree}
};


