import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Section2 from "./Section2";

function Section() {
  return (
    <Box mt={"30px"}>
      <Flex align={"center"} justify="center" mt="50px">
        <Heading color={"darkred"}>Panaverse</Heading>
      </Flex>
      <Flex justify={{ base: "center", md: "center" }} mt="15px">
        <Heading size={{ base: "sm", md: "lg" }}>
          Decentralized Autonomous Organization
        </Heading>
      </Flex>
      <Section2 />
    </Box>
  );
}

export default Section;
