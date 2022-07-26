import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

import Header from '../components/Header';
import Meta from '../components/Meta';

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
  FormikForm,
  FormikYup,
  Toast,
  Captcha,
  MTable,
} from '../cmps';

const Home = (props) => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  // page content
  const pageTitle = 'Home';
  const pageDescription = 'welcome to react bootstrap template';

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
          <AccordionHeader targetId="9">Navbar</AccordionHeader>
          <AccordionBody accordionId="9">
            <Navbar />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="10">FormikForm</AccordionHeader>
          <AccordionBody accordionId="10">
            <FormikForm />
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="11">Formik</AccordionHeader>
          <AccordionBody accordionId="11">
            <Formik />
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="12">FormikYup</AccordionHeader>
          <AccordionBody accordionId="12">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="13">Captcha</AccordionHeader>
          <AccordionBody accordionId="13">
            <Captcha />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="14">MTable</AccordionHeader>
          <AccordionBody accordionId="14">
            <MTable />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="15">FormikYup</AccordionHeader>
          <AccordionBody accordionId="15">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="16">FormikYup</AccordionHeader>
          <AccordionBody accordionId="16">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="17">FormikYup</AccordionHeader>
          <AccordionBody accordionId="17">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="18">FormikYup</AccordionHeader>
          <AccordionBody accordionId="18">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="19">FormikYup</AccordionHeader>
          <AccordionBody accordionId="19">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="20">FormikYup</AccordionHeader>
          <AccordionBody accordionId="20">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="21">FormikYup</AccordionHeader>
          <AccordionBody accordionId="21">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="22">FormikYup</AccordionHeader>
          <AccordionBody accordionId="22">
            <FormikYup />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Home;
