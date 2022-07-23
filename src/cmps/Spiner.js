import React, { useState } from "react";
import {
	Button,
	Spinner,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";

const Example = (args) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Spinner>Loading...</Spinner>
			<Spinner color="primary">Loading...</Spinner>
			<Spinner color="primary" type="grow">
				Loading...
			</Spinner>
			<Spinner className="m-5" color="success">
				Loading...
			</Spinner>

			<Spinner color="danger" size="sm">
				Loading...
			</Spinner>
			<Spinner color="success" size="sm" type="grow">
				Loading...
			</Spinner>

			<Spinner
				color="primary"
				style={{
					height: "3rem",
					width: "3rem",
				}}
			>
				Loading...
			</Spinner>
			<Spinner
				color="info"
				style={{
					height: "3rem",
					width: "3rem",
				}}
				type="grow"
			>
				Loading...
			</Spinner>

			<Button color="primary" disabled>
				<Spinner size="sm">Loading...</Spinner>
				<span> Loading</span>
			</Button>
		</div>
	);
};

export default Example;
