import { Box, Image } from "@chakra-ui/react";

function ProductInfoCard({ svg, children }) {
  return (
    <Box
      backgroundColor={"white"}
      textAlign={"center"}
      boxShadow={"sm"}
      rounded={"lg"}
      position={"relative"}
      padding={"2rem"}
      height={"200px"}
      width={"300px"}
      border={"1px solid beige"}
    >
      <Image
        width={"50px"}
        position={"absolute"}
        top={"-25px"}
        left={"125px"}
        src={svg}
        alt=""
      />
      {children}
    </Box>
  );
}

export default ProductInfoCard;
