const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Import the cors package



const app = express();
app.use(bodyParser.json());
app.use(cors());

// database connection!!!!
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_database"
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
  });

// api connecting to the db
app.post('/api/login', (req, res) => {
    const {email, password} = req.body;
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) =>{
        if(err) {
            console.error(err);
            return res.status(500).json({error: "Database error"});
        }

        if(data.length > 0) {
            return res.json({message: "Login Successful", user:data[0]});
        } else{
            return res.status(401).json({error: "Invalid Credentials"});
        }
    });
});

// starting my server
app.listen(5000, () => {
    console.log('Server started on port 5000');
});