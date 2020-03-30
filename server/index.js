const express = require('express')
const products = requre('../products.json')

const app = express()

const port = 3001

app.get('/api/products', getProducts)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})