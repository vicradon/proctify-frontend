import Webcam from "react-webcam";
import { useFaceDetection } from "react-use-face-detection";
import { FaceDetection } from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
import { Container, Flex, Heading } from "@chakra-ui/react";
import Loader from "../components/Loaders/Loader";

function Verification() {
  const { webcamRef, boundingBox, isLoading, detected, facesDetected } =
    useFaceDetection({
      faceDetectionOptions: {
        model: "short",
      },
      faceDetection: new FaceDetection({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
      }),
      camera: ({ mediaSrc, onFrame, width, height }) =>
        new Camera(mediaSrc, {
          onFrame,
          width,
          height,
        }),
    });

  return (
    <Container maxW={"container.xl"}>
      <Heading>Image Recognition Demo</Heading>
      <p>{`Face Detected: ${detected}`}</p>
      <p>{`Number of faces detected: ${facesDetected}`}</p>
      <Flex justifyContent={"center"}>
        <Loader show={isLoading} />
      </Flex>
      <div style={{ width: "100%", height: "500px", position: "relative" }}>
        {boundingBox.map((box, index) => (
          <div
            key={`${index + 1}`}
            style={{
              border: "4px solid red",
              position: "absolute",
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
              color: "white",
            }}
          >
            Osinachi Chukwujama
          </div>
        ))}
        <Webcam
          ref={webcamRef}
          forceScreenshotSourceSize
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        />
      </div>
    </Container>
  );
}

export default Verification;
