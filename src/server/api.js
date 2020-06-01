// Simple Express server setup to serve for local testing/dev API server
/*
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const jsforce = require('jsforce');
require('dotenv').config();
const { SF_USERNAME, SF_PASSWORD, SF_TOKEN, SF_LOGIN_URL } = process.env;
if (!(SF_USERNAME && SF_PASSWORD && SF_TOKEN && SF_LOGIN_URL)) {
    console.error(
        'Cannot start app: missing mandatory configuration. Check your .env file.'
    );
    process.exit(-1);
}
const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
});
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
});
const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

app.get('/data/sessions', (req, res) => {
    const soql = `SELECT sfid,Id,Name,Start_Time__c,End_Time__c,Location__c FROM salesforce.Session__c;`;
        conn.query(soql, (err, result) => {
            if (err) {
                res.sendStatus(500);
            } else if (result.records.length === 0) {
                res.status(404).send('Session not found.');
            } else {
              constant sessions = [];
                sessions = result.records.map(productRecord=> {                   
                                return {
                                  id:productRecord.sfid,
                                  Name:productRecord.Name,
                                  startTime:productRecord.Start_Time__c,
                                  EndTime:productRecord.End_Time__c,
                                };                              
});
            }
res.send({ data: sessions });
                    
                  });
                  
                
              });
            
app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
*/
const { Client } = require('pg');
//require('dotenv').config();
module.exports= app=>{    
    
app.get('/api/sessions',(req,res)=>{
    console.log("Inside GET Method");
  //const sessions=[];
  const connectionString='heroku pg:psql postgresql-encircled-67862 --app shrouded-brook-23913';
    const client = new Client({
        connectionString: connectionString,
        ssl: true
      });      
      client.connect();   
      client.query('SELECT sfid,Id,Name,Start_Time__c,End_Time__c,Location__c FROM salesforce.Session__c;', (err, data) => {
        if (err) console.log('This is session error'+err);
        var sessions=[];
        sessions=data.rows.map(productRecord=>{
          return{            
            id:productRecord.sfid,
            Name:productRecord.Name,
            startTime:productRecord.Start_Time__c,
            EndTime:productRecord.End_Time__c,
          };
        });        
        res.json(sessions);
        console.log("conn finish");
        client.end();
      });      


      
});
};

/*

var pg = require('pg');        
        //You can run command "heroku config" to see what is Database URL from Heroku belt
        var conString = process.env.DATABASE_URL || "postgres://postgres:Welcome123@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from employee");
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
        */