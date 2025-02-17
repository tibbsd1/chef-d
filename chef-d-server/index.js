import 'dotenv/config';
import express, { json } from 'express';
import { createConnection } from "mysql2";
const app = express();
import cors from "cors";

app.use(json());
app.use(cors());

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.listen(process.env.DB_PORT, () => {
    connection.connect(err => {
        if (err) throw err;
        console.log("Connected to Chef-D...B, get it?")
    })
})

/* GET ALL Menu Items */
app.get('/api/all-menu-items', (req, res) => {

    let query = `SELECT * FROM chef_d.items`;
    connection.query(query, function (err, rows, fields) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    })

})

/* GET ALL BREAKFAST ITEMS */
app.get('/api/breakfast-items', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE cat = 'breakfast' OR cat = "breakfast\r" AND item_type != 'Drinks'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Pancakes */
app.get('/api/pancakes', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Pancakes'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET French Toast */
app.get('/api/french-toast', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'French Toast'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET Geno's Specials */
app.get('/api/geno-specials', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = "Geno's Special Breakfast"`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET Breakfast Specials */
app.get('/api/breakfast-specials', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = "Breakfast Specials"`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET Omelets */
app.get('/api/omelets', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Omelet'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET ALL Lunch ITEMS */
app.get('/api/lunch-items', (req, res) => {
    //TODO: WHY IS THIS RETURNING 1 PARTICULAR DRINK?????
    let query = `SELECT * FROM chef_d.items WHERE cat = 'lunch' OR cat = 'lunch\r' AND item_type != "Drinks"`
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET ALL Drink ITEMS */
app.get('/api/drink-items', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Drinks'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET ALL Appetizer ITEMS */
app.get('/api/appetizers', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Appetizers'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* GET Salads */
app.get('/api/salads', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Salads'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Entrees */
app.get('/api/entrees', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Entrees'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Chimichangas */
app.get('/api/chimichanga', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Chimichangas'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Tacos */
app.get('/api/tacos', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Tacos'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Tortas */
app.get('/api/tortas', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Tortas'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Burrito Locos */
app.get('/api/burritos', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Burrito Loco'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Burgers */
app.get('/api/burgers', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Burgers'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Quesadillas */
app.get('/api/quesadillas', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Quesadillas'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Signature Dishes*/
app.get('/api/signature-dishes', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Signature Dishes'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})
/* GET Sandwiches*/
app.get('/api/sandwiches', (req, res) => {

    let query = `SELECT * FROM chef_d.items WHERE item_type = 'Sandwiches'`;
    connection.query(query, (err, rows, fields) => {
        err ? res.send(err) : res.send(rows)
    })
})

/* POST */

const getRandom8DigitNumber = () => {
    // Returns a random number between 10000000 and 99999999
    return Math.floor(Math.random() * 100000000) + 10000000;
}

app.post('/api/complete-orders', (req, res) => {
    const orderId = getRandom8DigitNumber();
    const orderItems = req.body.order_items;
    let query = `INSERT into chef_d.orders(order_id, item_id) VALUES ?`;
    let values = orderItems.map(item => [
        orderId,
        item
    ])
    connection.query(query, [values], (err, rows, fields) => {
        err ? res.send(err) :
            res.json("Successfully added the order")
    })
})