'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Input, Textarea} from "@nextui-org/react"
import { BiMailSend } from "react-icons/bi";
import {useFormik}  from "formik"
import { emailSchema } from "./modalschema"

const ContactModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const formik = useFormik({
        initialValues: {
            email: "",
            title: "",
            content: "",
        },
        
        validationSchema: emailSchema,

        onSubmit: (values) => {alert(JSON.stringify(values, null, 2))},
    });

    const {errors, touched, values, handleChange, handleSubmit, handleBlur} = formik;

    return(
        <div className="mt-4">
            <Button onClick={onOpen} color="danger" variant="bordered" className="w-fit text-xl" startContent={<BiMailSend/>}>Send Email</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="flex flex-col">Contact Form</ModalHeader>
                        <ModalBody>
                            <Input autoFocus isRequired name="email" id="email" onBlur={handleBlur} value={values.email} onChange={handleChange} label="Email" labelPlacement="outside" placeholder="Enter your email" variant="boredered"/>
                            {errors.email && touched.email ? <div class="error-message">{errors.email}</div> : null}
                            <Input isRequired name="title" id="title" onBlur={handleBlur} value={values.title} onChange={handleChange} label="Title" labelPlacement="outside" placeholder="Enter the topic" variant="boredered"/>
                            {errors.title && touched.title ? <div class="error-message">{errors.title}</div> : null}
                            <Textarea isRequired name="content" id="content" onBlur={handleBlur} value={values.content} onChange={handleChange} label="Content" labelPlacement="outside" placeholder="Type your message here"/>
                            {errors.content && touched.content ? <div class="error-message">{errors.content}</div> : null}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                            <Button color="success" onPress={onClose} type="submit">Send</Button>
                        </ModalFooter>
                    </form>        
                )}
            </ModalContent>
        </Modal>
        </div>
    )
}

export default ContactModal