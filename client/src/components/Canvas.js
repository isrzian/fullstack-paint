import React, { useEffect, useRef } from 'react';
import { observer } from "mobx-react-lite"
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import {Brush} from "../tools";
import "../styles/canvas.scss";

export const Canvas = observer(() => {
	const canvasRef = useRef()

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasRef.current))
	}, [])

	const onMouseDownHandler = () => {
	  canvasState.pushToUndo(canvasRef.current.toDataURL())
	}
	
	return (
		<div className="canvas">
			<canvas
				ref={canvasRef}
				width={600}
				height={400}
				onMouseDown={() => onMouseDownHandler()}
			/>
		</div>
	)
})