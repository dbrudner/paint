import React from 'react';
import {connect} from 'react-redux';
import Swatch from "./swatch";
import ActiveSwatch from "./active-swatch";

const style = {
	display: "flex",
	justifyContent: "left",
}

const swatchesStyle = {
	borderBottom: "1px solid #888888",
	borderRight: "1px solid #888888",
	width: "172px",
	display: "flex",
	justifyContent: "left:",
	flexWrap: "wrap",
	paddingLeft: "2px",
	paddingBottom: "2px",
	backgroundColor: "rgb(228, 220, 220)"
}

const Palette = props => {
	const { palette, color } = props;

	const renderSwatches = palette.map(swatch => <Swatch color={swatch} /> )
	console.log(palette);

	return (
		<div style={style}>
			<ActiveSwatch activeColor={color} />
			<div style={swatchesStyle}>
				{renderSwatches}
			</div>
		</div>
		
	)
}

function mapStateToProps(state) {

	const { palette, color } = state;

    return {
		palette,
		color
    }
}

export default connect(mapStateToProps)(Palette)