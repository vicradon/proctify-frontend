import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function ImageCaptureModal({ isOpen, onClose, displayImage }) {
  const [imageSrc, setImageSrc] = useState("");
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    displayImage(imageSrc);
  }, [webcamRef, displayImage]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Capture Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {imageSrc ? (
            <Image src={imageSrc} alt="" />
          ) : (
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
          )}
        </ModalBody>

        <ModalFooter>
          {imageSrc ? (
            <Flex>
              <Button
                onClick={() => {
                  setImageSrc("");
                  onClose();
                }}
                bg="ghost"
                mr={3}
              >
                Close Modal
              </Button>
              <Button onClick={() => setImageSrc("")} colorScheme="blue" mr={3}>
                Retry
              </Button>
            </Flex>
          ) : (
            <Button onClick={capture} colorScheme="blue" mr={3}>
              Capture Image
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ImageCaptureModal;
