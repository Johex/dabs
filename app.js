const express = require('express');
const delay = require('delay');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const port = 80;




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//set static path
app.use(express.static(path.join(__dirname, 'public')));



const con = mysql.createConnection({
    host: "35.234.124.218",
    user: "root",
    password: "nyqegpueuxhrcjkkuehkvs%duumgkmwttymt6qfiuvcgqncku<ygPqtxLsuyeiazkqszk6",
    database: "school"
});

const query = "SELECT COUNT(*) AS data FROM counter;";
let count;






//view engine:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




//set static path
app.use(express.static(path.join(__dirname, 'public')));

//home page

app.get('/', function (req,res) {
    con.connect(function(err) {
        con.query(query, function (err, result, fields) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            count = result[0].data;
            console.log(count);

        });
    });
    (async () => {
        await delay(600);
        res.render('index', {data: count});
    })();

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

