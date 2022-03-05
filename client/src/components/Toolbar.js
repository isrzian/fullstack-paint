import React from 'react';
import toolState from "../store/toolState";
import {Brush, Rect, Circle, Line, Eraser} from "../tools"
import canvasState from "../store/canvasState";
import "../styles/toolbar.scss";

export const Toolbar = () => {

	const changeColor = event => {
		toolState.setFillColor(event.target.value)
		toolState.setStrokeColor(event.target.value)
	}

	return (
		<div className="toolbar">
			<button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}/>
			<button className="toolbar__btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}/>
			<button className="toolbar__btn circle" onClick={() => toolState.setTool(new Circle((canvasState.canvas)))}/>
			<button className="toolbar__btn eraser" onClick={() => toolState.setTool(new Eraser((canvasState.canvas)))}/>
			<button className="toolbar__btn line" onClick={() => toolState.setTool(new Line((canvasState.canvas)))}/>
			<input
				style={{marginLeft: 10}}
				type="color"
				onChange={event => changeColor(event)}
			/>
			<button className="toolbar__btn undo"/>
			<button className="toolbar__btn redo"/>
			<button className="toolbar__btn save"/>
		</div>
	)
}