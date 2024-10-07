const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(_dirname, 'pages')))

app.listen(3000, () => {
console.log('Server is running on port 3000')
})