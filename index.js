import express from 'express'
const app = express()

// create a request
app.get('/test', (request, response) =>{
 response.send("It's all good man!")
})

app.get('/', (request, response) => response.send('Welcome to our first API'))
// listen to port -- 
app.listen(3030, () => console.log('Listening on https://localhost:3030 ...'))