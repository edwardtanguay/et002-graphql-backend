import fs from 'fs';
import { IJob, ISkill } from './interfaces.js';
import * as config from './config.js';

const jobs: IJob[] = JSON.parse(fs.readFileSync('./src/data/jobs.json', 'utf8'));
const skills: ISkill[] = JSON.parse(fs.readFileSync('./src/data/skills.json', 'utf8'));

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	code {
		background-color: #333;
	}
	a {

		color: yellow;
	}
</style>
<h1>Jobs/Skills Backend</h1>
<ul>
	<li><code><a href="/jobs">/jobs</a></code> - all jobs</li>
	<li><code><a href="/skills">/skills</a></code> - all skills</li>
</ul>
	`;
}

export const getJobs = (): IJob[] => {
    return jobs;
}
 
export const getJob = (id: number): IJob => {
    return jobs.find(m => m.id === id);
}
 
export const getSkills = (): ISkill[] => {
    return skills;
}
 
export const getSkill = (idCode: string): ISkill => {
    return skills.find(m => m.idCode === idCode);
}