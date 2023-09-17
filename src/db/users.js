import db from "$db/mongo"
import mongo from 'mongodb'

export const users = db.collection('users')

export async function updateSession(_id, uuid) {
	await users.updateOne({ '_id': new mongo.ObjectId(_id)},{$set: {'session_id': uuid}})
}
