import React, {Component} from 'react';
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	top: ${props => `${props.y}px`};
	left: ${props => `${props.x}px`};
`

export default function DragAndDrop(WrappedComponent, offsetX, offsetY) {
	return class extends Component {

		constructor(props) {
			super(props);

			this.state = {
				offsetX: null,
				offsetY: null
			}
		}

		reposition = e => {
			const { clientX, clientY } = e;
			const { offsetX, offsetY } = this.state;
			console.log(clientX - offsetX, clientY - offsetY)
			this.setState({ currentX: clientX - offsetX, currentY: clientY - offsetY })
		}

		getOffset = e => {
			const el = document.getElementById("dragEl")
			const { top, left, bottom, right } = el.getBoundingClientRect();
			console.log({ top, left, bottom, right })
			const { clientX, clientY } = e;
			this.setState({ offsetX: clientX - left, offsetY: clientY - top})
		}

		render() {
			const { x, y } = this.props;
			const { offsetX, offsetY } = this.state;
			
			console.log( WrappedComponent, this.state.currentX,  this.state.currentY)

			return (
				<Container id="dragEl" draggable="true" onDragStart={this.getOffset} onDragEnd={this.reposition} x={ this.state.currentX - this.props.offsetX || x - this.props.offsetX } y={ this.state.currentY - this.props.offsetY || y - this.props.offsetY }>
					<WrappedComponent {...this.props} />
				</Container>
			)
			
		}
	}
}