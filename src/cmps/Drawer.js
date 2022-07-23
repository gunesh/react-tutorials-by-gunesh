import React, { useState } from "react";
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

function ResponsiveExample() {
	const [show, setShow] = useState(false);

	const toggle = () => setShow(!show);

	return (
		<>
			<Button color="primary" onClick={toggle}>
				Open
			</Button>
			<Offcanvas
				isOpen={show}
				toggle={toggle}
				backdrop={"static"}
				direction={"end"}
			>
				<OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
				<OffcanvasBody>
					<strong>This is the Offcanvas body.</strong>
				</OffcanvasBody>
			</Offcanvas>
		</>
	);
}

export default ResponsiveExample;
