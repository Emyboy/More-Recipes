/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const port = process.env.PORT || 5000;
const app = express();
import rootRoute from './routes/rootRoute';
import db from '../models';
import path from 'path';


//  USE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'..','/template')));
app.use(express.static(path.join(__dirname,'..','/template/css')));

app.use('/api/',rootRoute);

app.get('/',(req,res)=>{
	res.sendfile(path.join(__dirname,'../../', '/template/index.html'));
});



db.sequelize.sync().then(()=>{
	app.listen(port,()=>{
		console.log(`server is running on port ${port}`);
	});
});



export default app;