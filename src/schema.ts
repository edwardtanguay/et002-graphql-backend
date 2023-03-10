import { buildSchema } from 'graphql';

export const schema = buildSchema(`
	type Query {
		message: String,
		departments: [String],
		jobs: [Job]
	}
	
	type Job {
		id: Int,
		title: String,
		company: String,
		url: String,
		description: String,
		skillList: String,
		publicationDate: String
	}
`);