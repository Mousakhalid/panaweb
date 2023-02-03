import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Section2() {
  return (
    <Box mt={"40px"} h={{ base: "570px", md: "340px" }}>
      <Box
        ml={{ base: "30px", md: "90px" }}
        bg="white"
        h={{ base: "440px", md: "210px" }}
        mr={{ base: "30px", md: "90px" }}
        borderRadius="20px"
      >
        <Flex p={"50px"}>
          <Flex
            direction={{ base: "column", md: "column" }}
            w={{ base: "100%", md: "70%" }}
          >
            <Heading color={"gray.800"}>Future of Web</Heading>
            <Text color={"blackAlpha.700"} textAlign={"justify"}>
              The Future of the Web is Web 3.0, Metaverse, and Edge
              Computing.Panaverse DAO is a movement to spread these technolgies
              globally. It is community of Web 3 and Metaverse developers,
              designers, trainers, startup founders and service providers.
            </Text>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml="20px"
            w={{ base: "100%", md: "30%" }}
            direction={{ base: "row", md: "row" }}
            align={"center"}
          >
            <Button bg={"blue.300"} mr="30px">
              Apply Now
            </Button>
            <Button
              padding={"13px 20px 13px 20px"}
              colorScheme={"teal"}
              variant="outline"
            >
              About
            </Button>
          </Flex>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          ml="50px"
          w={{ base: "100%", md: "0" }}
          direction={{ base: "row" }}
          align={"center"}
        >
          <Button bg={"blue.300"} mr="30px">
            Apply Now
          </Button>
          <Button
            padding={"13px 20px 13px 20px"}
            colorScheme={"teal"}
            variant="outline"
          >
            About
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Section2;
