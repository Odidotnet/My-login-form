const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
// database connection!!!!
const db = mysql.createConnection({
    host: "locahost",
    user: "root",
    password: "",
    database: "user_database"
})

// api connecting to the db
app.post('login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) return res.json("Login Failed");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log('Listenning...');
})