const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const PORT = 5000

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port...`))