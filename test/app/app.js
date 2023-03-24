const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Mé jméno je Jakub Hanykyr!')
})

app.listen(3000, () => {
  console.log('Server běží na http://localhost:3000')
})