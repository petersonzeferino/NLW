import express from 'express';

const app = express();

app.get('/users', (request,response) => {
    console.log('Listagem de usuarios');

    response.send('Helo World');
});

app.listen(3333);