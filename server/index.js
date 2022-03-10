const express = require('express')
const app = express()
const wsServer = require('express-ws')(app)
const aWss = wsServer.getWss()

app.ws('/', (ws, req) => {
	console.log('Connection initialized!')
	ws.send('You successfully connected!')
	ws.on('message', (msg) => {
		msg = JSON.parse(msg)
		switch (msg.method) {
			case 'connection':
				connectionHandler(ws, msg)
				break
		}
	})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port...`))

const connectionHandler = (ws, msg) => {
	ws.id = msg.id
	broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
	aWss.clients.forEach(client => {
		if (client.id === msg.id) {
			client.send(`User ${msg.username} connected`)
		}
	})
}