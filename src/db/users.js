import db from "$db/mongo"
import mongo from 'mongodb'
import bcrypt from "bcrypt";

export const users = db.collection('users')

export async function updateSession(_id, uuid) {
	await users.updateOne({ '_id': new mongo.ObjectId(_id) }, { $set: { 'session_id': uuid } })
}

// authentication
const saltRounds = 10;

export async function addUser(username, password, session_id) {
	const salt = await bcrypt.genSalt(saltRounds)
	const hash = await bcrypt.hash(password,salt)
	await users.insertOne({ username: username, password: hash, session_id: session_id }) 

}

export async function isValidCredentials(username, password) {
	const user = await users.findOne({username: username})
	const hash = user.password
	const result = await bcrypt.compare(password, hash)
	return result
}

