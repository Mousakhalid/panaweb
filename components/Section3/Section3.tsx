import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Section3() {
  return (
    <Box
      bg={"whitesmoke"}
      borderRadius="30px"
      m={{ base: "30px", md: "50px" }}
      pt="1px"
      pb={{ base: "5px", md: "10px" }}
    >
      <Box
        mt={"90px"}
        mr={{ base: "30px", md: "120px" }}
        ml={{ base: "30px", md: "120px" }}
        mb={{ base: "30px", md: "120px" }}
      >
        <Heading
          textAlign={{ base: "left", md: "center" }}
          m={{ base: "20px", md: "50px" }}
        >
          Program of Studies
        </Heading>
        <Text textAlign={"justify"} color="gray.600">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects. To accommodate everyone, courses will be held primarily on
          weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.
        </Text>
      </Box>
    </Box>
  );
}

export default Section3;
