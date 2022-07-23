import React, { useState } from "react";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "reactstrap";

import Header from "../components/Header";
import Meta from "../components/Meta";

import {
	Slider,
	Toggle,
	Modal,
	Tabs,
	Navbar,
	Drawer,
	Popover,
	Spiner,
	Formik,
	Toast
} from "../cmps";

const Home = (props) => {
	const [open, setOpen] = useState("1");
	const toggle = (id) => {
		open === id ? setOpen() : setOpen(id);
	};

	// page content
	const pageTitle = "Home";
	const pageDescription = "welcome to react bootstrap template";

	return (
		<div>
			<Meta title={pageTitle} />
			<Header head={pageTitle} description={pageDescription} />

			<Accordion open={open} toggle={toggle}>
				<AccordionItem>
					<AccordionHeader targetId="1">Slider</AccordionHeader>
					<AccordionBody accordionId="1">
						<Slider />
					</AccordionBody>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader targetId="2">Toggle</AccordionHeader>
					<AccordionBody accordionId="2">
						<Toggle />
					</AccordionBody>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader targetId="3">Modal</AccordionHeader>
					<AccordionBody accordionId="3">
						<Modal />
					</AccordionBody>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader targetId="4">Tabs</AccordionHeader>
					<AccordionBody accordionId="4">
						<Tabs />
					</AccordionBody>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader targetId="9">Navbar</AccordionHeader>
					<AccordionBody accordionId="9">
						<Navbar />
					</AccordionBody>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader targetId="5">Drawer</AccordionHeader>
					<AccordionBody accordionId="5">
						<Drawer />
					</AccordionBody>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader targetId="6">Popover</AccordionHeader>
					<AccordionBody accordionId="6">
						<Popover />
					</AccordionBody>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader targetId="7">Spiner</AccordionHeader>
					<AccordionBody accordionId="7">
						<Spiner />
					</AccordionBody>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader targetId="8">Toast</AccordionHeader>
					<AccordionBody accordionId="8">
						<Toast />
					</AccordionBody>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader targetId="8">Formik</AccordionHeader>
					<AccordionBody accordionId="8">
						<Formik />
					</AccordionBody>
				</AccordionItem>

			</Accordion>
		</div>
	);
};

export default Home;
