import React, { useState } from "react";
import { Popover, PopoverHeader, Button ,PopoverBody} from "reactstrap";

const Example = (args) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button id="Popover1" type="button" onClick={toggle}>
				Launch Popover
			</Button>
			<Popover flip target="Popover1" toggle={toggle}>
				<PopoverHeader>Popover Title</PopoverHeader>
				<PopoverBody>
					Sed posuere consectetur est at lobortis. Aenean eu leo quam.
					Pellentesque ornare sem lacinia quam venenatis vestibulum.
				</PopoverBody>
			</Popover>
		</div>
	);
};

export default Example;
