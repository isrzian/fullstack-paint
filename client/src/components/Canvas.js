import React, { useEffect, useRef, useState } from 'react';
import {useParams} from "react-router-dom"
import { observer } from "mobx-react-lite"
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import {Brush} from "../tools";
import "../styles/canvas.scss";
import {Button, Modal} from "react-bootstrap";

export const Canvas = observer(() => {
	const canvasRef = useRef()
	const usernameRef = useRef()
	const [modal, setModal] = useState(true)
	const sessionId = useParams().id

	useEffect(() => {
		if (canvasState.username) {
			const socket = new WebSocket('ws://localhost:5000/')
			socket.onopen = () => {
				socket.send(JSON.stringify({
					id: sessionId,
					username: canvasState.username,
					method: 'connection'
				}))
			}
			socket.onmessage = () => {

			}
		}
	}, [canvasState.username])

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasRef.current))
	}, [])

	const onMouseDownHandler = () => {
	  canvasState.pushToUndo(canvasRef.current.toDataURL())
	}

	const connectionHandler = () => {
		canvasState.setUsername(usernameRef.current.value)
		setModal(false)
	}

	return (
		<div className="canvas">
			<Modal show={modal} onHide={() => {}}>
				<Modal.Header>
					<Modal.Title>Enter your name!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="text" ref={usernameRef} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => connectionHandler()}>
						Log in
					</Button>
				</Modal.Footer>
			</Modal>
			<canvas
				ref={canvasRef}
				width={600}
				height={400}
				onMouseDown={() => onMouseDownHandler()}
			/>
		</div>
	)
})