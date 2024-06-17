const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let data = [
    {
        "name": "Mason",
        "age": 10,
        "city": "Kansas City",
    },
    {
        "name": "Liam",
        "age": 11,
        "city": "New York",
    },
    {
        "name": "Emma",
        "age": 12,
        "city": "Los Angeles",
    },
    {
        "name": "Olivia",
        "age": 13,
        "city": "Chicago",
    }
]

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    console.log('get main data');
    res.send(data);
});

app.get('/test/:id', (req, res) => {
    console.log('get test data');
    const id = req.params.id
    console.log('id:', id);
    if(id > 0 && id <= data.length) {
        res.send(data[id - 1]);
    } else {
        res.status(404).send('Not found');
    }
}); 