import * as model from './model.js';
import express from 'express';
import cors from 'cors';
import logger from './logger.js';
import * as config from './config.js';

const app = express();
app.use(cors());
app.use(logger);

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(model.getApiInstructions());
});

app.get('/jobs', (req: express.Request, res: express.Response) => {
    res.json(model.getJobs());
});
 
app.get('/skills', (req: express.Request, res: express.Response) => {
    res.json(model.getSkills());
});

app.listen(config.port, () => {
	console.log(`listening on port http://localhost:${config.port}`);
});