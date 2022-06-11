import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import landingImage from "../assets/images/home-first-pic.png";
import TrainSvg from "../assets/icons/train.svg";
import IntegrateSvg from "../assets/icons/integrate.svg";
import AccessSvg from "../assets/icons/access.svg";
import ProductInfoCard from "../components/Cards/ProductInfoCard";
import HexagonBackground from "../assets/images/Hexagon-background.jpg";

function Home() {
  return (
    <Box
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundImage={`url('${HexagonBackground}')`}
      height={"100%"}
    >
      <Container maxW={"container.xl"}>
        <Flex
          paddingY={"2rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Text color={"brand.500"} fontWeight={"bold"} fontSize={"2xl"}>
              Proctify
            </Text>
          </Box>

          <Flex columnGap={"1rem"}>
            <Button color={"gray.500"}>
              <Link href="/login">Login</Link>
            </Button>
            <Button
              colorScheme={"white"}
              color={"white"}
              backgroundColor={"brand.500"}
            >
              <Link href="/register">Register</Link>
            </Button>
          </Flex>
        </Flex>
      </Container>

      <Container maxW={"container.xl"}>
        <Flex
          mb={"4rem"}
          justifyContent={{ base: "start", lg: "space-around" }}
        >
          <Box>
            <Text mb={"1rem"} mt={"2rem"} fontSize={"48px"}>
              Seamless AI-Powered <br /> Proctoring
            </Text>

            <Button
              textColor={"white"}
              width={"150px"}
              backgroundColor={"brand.500"}
            >
              Learn More
            </Button>
          </Box>

          <Box display={{ base: "none", lg: "block" }}>
            <Image
              maxWidth={"450px"}
              width={"450px"}
              src={landingImage}
              alt="happy customers"
            />
          </Box>
        </Flex>

        <Box mb={"4rem"}>
          <Heading mb={"4rem"} textAlign={"center"} color={"#333"} size={"lg"}>
            Steps to Success
          </Heading>

          <Flex
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            columnGap={"1rem"}
            rowGap={"2rem"}
          >
            <ProductInfoCard svg={TrainSvg}>
              <Heading size={"md"}>Train</Heading>
              <Flex height={"100%"} alignItems={"center"}>
                <Text>Train your student faces as a deployed models</Text>
              </Flex>
            </ProductInfoCard>

            <ProductInfoCard svg={IntegrateSvg}>
              <Heading size={"md"}>Integrate</Heading>

              <Flex height={"100%"} alignItems={"center"}>
                <Text>integrate our SDKs into your CBT software</Text>
              </Flex>
            </ProductInfoCard>

            <ProductInfoCard svg={AccessSvg}>
              <Heading size={"md"}>Access</Heading>

              <Flex height={"100%"} alignItems={"center"}>
                <Text>Access trained models at the edge</Text>
              </Flex>
            </ProductInfoCard>
          </Flex>
        </Box>

        <Box>
          <Heading mb={"2rem"} textAlign={"center"} color={"#333"} size={"lg"}>
            How It Works
          </Heading>
          <OrderedList>
            <ListItem>
              JAMB trains a computer vision model using the video recognition of
              all students
            </ListItem>

            <ListItem>The model is uploaded to the cloud</ListItem>

            <ListItem>
              The web app downloads the trained model and uses it on the edge
              during the exam
            </ListItem>
          </OrderedList>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
