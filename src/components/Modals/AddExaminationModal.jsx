import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Box,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function AddExaminationModal({ isOpen, onClose, addExamination }) {
  const initialFormData = {
    examinationName: "",
  };
  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Examination</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form">
            <FormControl>
              <FormLabel htmlFor="examinationName">Examination Name</FormLabel>
              <Input
                value={formData.examinationName}
                onChange={handleInputChange}
                name="examinationName"
                id="examinationName"
                type="text"
                placeholder="JAMB 2020"
              />
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              addExamination(formData);
              onClose();
              setFormData(initialFormData);
            }}
            colorScheme="brand"
            bg="brand.500"
          >
            Add Examination
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddExaminationModal;
