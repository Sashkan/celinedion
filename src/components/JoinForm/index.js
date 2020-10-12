import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  Box,
} from "@chakra-ui/core";
import { useLocation } from 'react-router-dom';

const JoinForm = ({ addUser }) => {
  const [name, setName] = useState('')

  const [open, setOpen] = useState(true)
  const location = useLocation()
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" value={name} onChange={e => setName(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={() => {
              addUser(name)
              setOpen(false)
            }
            }
            >
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default JoinForm
