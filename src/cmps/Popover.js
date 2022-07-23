import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

function App() {
	// Popover open state
	const [popoverOpen, setPopoverOpen] = React.useState(false);

	return (
		<div
			style={{
				display: "block",
				width: 700,
				padding: 30,
			}}
		>
			<Button id="Popover1" type="button">
				Popover
			</Button>{" "}
			<br />
			<br />
			<Popover
				placement="right"
				isOpen={popoverOpen}
				target="Popover1"
				toggle={() => {
					setPopoverOpen(!popoverOpen);
				}}
			>
				<PopoverHeader>Sample Popover Title</PopoverHeader>
				<PopoverBody>Sample Body Text to display...</PopoverBody>
			</Popover>
		</div>
	);
}

export default App;
