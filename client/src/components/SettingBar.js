import React from 'react';
import toolState from "../store/toolState";

export const SettingBar = () => {
	return (
		<div className="setting-bar">
			<label htmlFor="line-width">Толщина линии</label>
			<input
				style={{margin: '0 10px'}}
				id="line-width"
				type="number"
				min={1}
				max={50}
				defaultValue={1}
				onChange={event => toolState.setLineWidth(event.target.value)}
			/>
			<label htmlFor="stroke-color">Цвет обводки</label>
			<input
				style={{margin: '0 10px'}}
				id="stroke-color"
				type="color"
				onChange={event => toolState.setStrokeColor(event.target.value)}
			/>
		</div>
	)
}