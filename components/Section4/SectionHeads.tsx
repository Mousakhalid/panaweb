import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function SectionHeads() {
  return (
    <Box mt="40px">
      <Flex justify={{ base: "center", md: "center" }} mt="15px">
        <Heading size={{ base: "sm", md: "lg" }} color="red.800">
          EARN WHILE YOU LEARN
        </Heading>
      </Flex>
    </Box>
  );
}

export default SectionHeads;
