import React, {Component} from 'react';
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	top: ${props => `${props.y}px`};
	left: ${props => `${props.x}px`};
`

export default function DragAndDrop(WrappedComponent) {
	return class extends Component {

		constructor(props) {
			super(props);

			this.state = {
				repositioning: false,
			}
		}

		reposition = e => {
			const { clientX, clientY } = e;
			const { offsetX, offsetY } = this.state;

			this.setState({ currentX: clientX - offsetX, currentY: clientY - offsetY })
		}

		getOffset = e => {
			const el = document.getElementById("dragEl")
			const { top, left, bottom, right } = el.getBoundingClientRect();
			const { clientX, clientY } = e;
			this.setState({ offsetX: clientX - left, offsetY: clientY - top})
		}

		render() {
			const { x, y } = this.props;
			return (
				<Container id="dragEl" draggable="true" onDragStart={this.getOffset} onDragEnd={this.reposition} x={this.state.currentX - 100 || x - 100} y={this.state.currentY - 20 || y - 20}>
					<WrappedComponent />
				</Container>
			)
			
		}
	}
}