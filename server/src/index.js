/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const port = process.env.PORT || 5000;
const app = express();


//  USE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));



app.listen(port,()=>{
	console.log(`server is running on port ${port}`);
});