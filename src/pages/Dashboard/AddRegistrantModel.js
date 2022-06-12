import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import PlaceholderImage from "../../assets/images/placeholder-image.png";
import ImageCaptureModal from "../../components/Modals/ImageCaptureModal";
import toast from "react-hot-toast";

function AddRegistrantModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [students] = useState([
    {
      id: 2,
      surname: "Boyle",
      first_name: "Ruth",
      middle_name: "Chiamaka",
      email: "ruth.boyle@gmail.com",
      model_url:
        "https://proctifystorage.blob.core.windows.net/student-models/djhd7894uidjsa8ugyodib.jpeg",
      created_at: "01-06-2021",
    },
  ]);
  const [selectedStudentEmail, setSelectedStudentEmail] = useState("");
  const [capturedPhotos, setCapturedPhotos] = useState([
    {
      imageSrc: "",
      name: "Not Smilling",
    },
    {
      imageSrc: "",
      name: "Smilling",
    },
    {
      imageSrc: "",
      name: "Facing Left",
    },
    {
      imageSrc: "",
      name: "Facing Right",
    },
    {
      imageSrc: "",
      name: "Looking down",
    },
    {
      imageSrc: "",
      name: "Looking up",
    },
  ]);
  const [activeImage, setActiveImage] = useState();

  const displayImage = (imageSrc) => {
    const newCapturedPhotos = capturedPhotos.map((capturedPhoto) => {
      if (capturedPhoto.name === activeImage) {
        return {
          ...capturedPhoto,
          imageSrc,
        };
      }
      return capturedPhoto;
    });
    setCapturedPhotos(newCapturedPhotos);
  };

  return (
    <DashboardLayout>
      <Heading mb={"0.5rem"} size={"lg"}>
        Add Registrant Model
      </Heading>

      <Grid
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
          "2xl": "1fr 1fr 1fr",
        }}
        rowGap={"1.5rem"}
        as={"form"}
      >
        <FormControl gridColumn={"1/-1"}>
          <FormLabel htmlFor="studentEmail">Student Email</FormLabel>

          <Select
            id="studentEmail"
            value={selectedStudentEmail}
            onChange={({ target }) => setSelectedStudentEmail(target.value)}
          >
            <option value="">Search for Student's Email</option>
            {students.map((student) => (
              <option key={student.email} value={student.email}>
                {student.email}
              </option>
            ))}
          </Select>
        </FormControl>

        {selectedStudentEmail &&
          capturedPhotos.map((capturedPhoto) => (
            <Flex
              key={capturedPhoto.name}
              flexFlow={"column"}
              alignItems={"center"}
            >
              <Image
                src={
                  capturedPhoto.imageSrc
                    ? capturedPhoto.imageSrc
                    : PlaceholderImage
                }
                alt={capturedPhoto.name}
              />
              <Box my={"1rem"}>
                <Text mb={"0.5rem"}>{capturedPhoto.name}</Text>
                <Button
                  onClick={() => {
                    setActiveImage(capturedPhoto.name);
                    onOpen();
                  }}
                >
                  Capture
                </Button>
              </Box>
            </Flex>
          ))}
      </Grid>

      {selectedStudentEmail && (
        <Flex justifyContent={"end"}>
          <Button
            onClick={() => toast.success("Dataset sent to Azure for training")}
            bgColor={"Background.500"}
            colorScheme={"brand"}
          >
            Train Model
          </Button>
        </Flex>
      )}

      <ImageCaptureModal
        onClose={onClose}
        isOpen={isOpen}
        displayImage={displayImage}
      />
    </DashboardLayout>
  );
}

export default AddRegistrantModel;
