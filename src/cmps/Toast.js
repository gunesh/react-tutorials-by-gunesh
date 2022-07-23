import React, { useState } from "react";
import {
	Toast,
	ToastHeader,
	ToastBody,
	Button,
	ModalFooter,
} from "reactstrap";

const Example = (args) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="primary" onClick={toggle}>
				Click Me
			</Button>
			<div className="p-3 my-2 rounded bg-docs-transparent-grid">
				<Toast isOpen={modal}>
					<ToastHeader toggle={toggle}>Reactstrap</ToastHeader>
					<ToastBody>
						This is a toast on a gridded background — check it out!
					</ToastBody>
				</Toast>
			</div>
		</div>
	);
};

export default Example;
