import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import TypewriterComponent from "typewriter-effect";
function Banner() {
  return (
    <Box h={{ base: "640px", md: "540px" }} bg="white">
      <Flex>
        <Flex
          paddingTop={{ base: "80px", md: "140px" }}
          direction="column"
          w={{ base: "none", md: "50%" }}
          ml={{ base: "8px", md: "30px" }}
          mr={{ base: "30px", md: "0" }}
        >
          <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }} mt={"10px"}>
            Panaverse
          </Text>

          <Heading mt={"10px"} color="blackAlpha.700">
            <TypewriterComponent
              options={{
                strings: [
                  "Become Certified Web 3.0 and <br /> Metaverse Developer",
                  "Earn While Learning",
                  "Learn Without Limits",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Heading>
          <Text
            mt={"10px"}
            fontSize={{ base: "12px", md: "18px", lg: "23px" }}
            fontWeight="400"
            lineHeight={{ base: "2", md: "1.5" }}
            color="blackAlpha.800"
          >
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
          <Flex m={"40px"}>
            <Button colorScheme="teal" variant="solid" mr={"16px"}>
              Join Now
            </Button>
            <Button colorScheme="teal" variant="outline">
              Download Syllables
            </Button>
          </Flex>
        </Flex>
        <Flex w={"50%"} display={{ base: "none", md: "flex" }}>
          <Image
            src="/images/what-is-Metaverse.png"
            display={{ base: "none", md: "flex" }}
          />
        </Flex>
      </Flex>
      <Flex w={"100%"} display={{ base: "flex", md: "none" }} align="center">
        <Image
          src="/images/what-is-Metaverse.png"
          display={{ base: "flex", md: "none" }}
          h="100%"
          align={"center"}
        />
      </Flex>
    </Box>
  );
}

export default Banner;
