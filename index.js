const express = require('express')
const { getAllManufacturers, getManufacturerByIdentifier } = require('./controllers/manufacturers')
const { getAllProducts, getProductsByIdentifier } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:name', getManufacturerByIdentifier)

app.get('/products', getAllProducts)

app.get('/products/:name', getProductsByIdentifier)

app.listen(1111, () => {
  console.log('Listening on port 1111...') // eslint-disable-line no-console
})
