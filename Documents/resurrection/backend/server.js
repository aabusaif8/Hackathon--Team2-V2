import express from 'express';
import Knex from 'knex';
import knexfile from './knexfile.js';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const knex = Knex(knexfile.development); // Renamed the variable to 'db'
const salt = 10

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
const verifyUser = (req, res, next) => {
  const token = req.cookies.token
  if(!token){
      return res.json({Error : 'You are not authenticated'})
  }else{
      jwt.verify(token, "secret_key", (err, decoded) => {
          if(err){
              return res.json({Error : 'Token is not authenticated'})
          }else{
              req.name = decoded.name
              next()
          }
      })
  }
}

app.get('/', (req, res) => {
    knex('login')
      .select('*')
      .then((result) => {
        if (result.length > 0) {
          const user = result.find((user) => user.id === 6); // Replace 5 with the actual id of the user who just logged in
          if (user) {
            const isLoggedIn = true;
            const name = user.name;
            const token = jwt.sign({ name }, "secret_key", { expiresIn: "1d" });
            res.cookie('token', token);
            return res.json({ Status: "Success", isLoggedIn, Name: name });
          } else {
            return res.json({ Status: "Failed", Error: "User not found" });
          }
        } else {
          return res.json({ Status: "Failed", Error: "No data found" });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.json({ Status: "Failed", Error: "Error retrieving data" });
      });
  });


app.post('/register', (req, res) => {
  knex('login')
    .insert({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hash(req.body.password.toString(), salt)
    })
    .then((result) => {
        console.log(result)
      return res.json({Status: "Success"})
    })
    .catch((err) => {
      console.error(err);
      return res.json({Error: "Data Insertion Failed."})
    })
});

app.post('/login', (req, res) => {
    try {
      const sql = `SELECT * FROM login WHERE email = ?`;
      knex.raw(sql, [req.body.email])
        .then((result) => {
          const data = result.rows.map((row) => ({
            id: row.id,
            name: row.name,
            email: row.email,
            password: row.password
          }));
          if (data.length > 0) {
            console.log(data[0].password, req.body.password)
            bcrypt.compare(req.body.password, data[0].password, (err, response) => {
              if (err) return res.json({ Status: "Failed", Error: "Error comparing password" });
              if (response) {
                console.log(response)
                const name = data[0].name
                console.log('name',name)
                const token = jwt.sign({ name }, "secret_key", { expiresIn: "1d" })
                res.cookie('token', token)
                return res.json({ Status: "Success", isLoggedIn: true, Name: name });
              } else {
                return res.json({ Status: "Failed", Error: "Password incorrect" });
              }
            })
          } else {
            return res.json({ Status: "Failed", Error: "Email not found" });
          }
        })
        .catch((err) => {
          console.log(err)
          return res.json({ Status: "Failed", Error: "Login Failed" });
        })
    } catch (err) {
      console.log(err)
    }
  })

  app.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({ Status: "Success" })
  })
app.listen(7000, () => {
  console.log('Server started on port 7000');
});