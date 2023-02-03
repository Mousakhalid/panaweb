import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

function SectionNuts() {
  return (
    <Box bg="white" h={{ base: "2900px", md: "1200px" }}>
      <Heading color={"red.700"} ml={{ base: "55px", md: "70px" }} pt="70px">
        Explore top courses
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify={"center"}
      >
        <Box
          w={"300px"}
          h="400px"
          bg={"gray.100"}
          m={{ base: "50px", md: "70px" }}
          borderRadius={"20px"}
        >
          <Text
            fontSize={"1rem"}
            fontWeight="800"
            alignItems="center"
            justifyItems={"center"}
            alignContent="center"
            justifyContent={"center"}
            p="20px"
          >
            Web 3.0 and Metaverse Specialization
          </Text>
          <Text align={"center"} justifyContent="center" m="10px">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </Text>
          <Flex
            alignContent={"center"}
            justifyContent="center"
            mr={"7px"}
            mt="10px"
          >
            <Link href="http://localhost:3000/web3.0andmetaverse"> <Button
              bg={"blue.600"}
              color="white"
              variant={"solid"}
              alignContent="center"
              justifyContent={"center"}
              loadingText='Submitting'
            >
              Explore Now
            </Button>
            </Link>
          </Flex>
        </Box>
        <Box
          w={"300px"}
          h="400px"
          bg={"gray.100"}
          m="70px"
          borderRadius={"20px"}
        >
          <Text
            fontSize={"1rem"}
            fontWeight="800"
            alignItems="center"
            justifyItems={"center"}
            alignContent="center"
            justifyContent={"center"}
            p="20px"
          >
            Artificial Intelligence and Deep Learning Specialization
          </Text>
          <Text align={"center"} justifyContent="center" m="10px">
            The AI and Deep Learning specialization focuses on building and
            deploying intelligent APIs using OpenAI models and building custom
            Deep Learning Tensorflow models.
          </Text>
          <Flex
            alignContent={"center"}
            justifyContent="center"
            mr={"7px"}
            mt="90px"
          >
            <Link href="http://localhost:3000/artificial-intelligence"><Button
              bg={"blue.600"}
              color="white"
              variant={"solid"}
              alignContent="center"
              justifyContent={"center"}
            >
              Explore Now
            </Button></Link>
          </Flex>
        </Box>
        <Box
          w={"300px"}
          h="400px"
          bg={"gray.100"}
          m="70px"
          borderRadius={"20px"}
        >
          <Text
            fontSize={"1rem"}
            fontWeight="800"
            alignItems="center"
            justifyItems={"center"}
            alignContent="center"
            justifyContent={"center"}
            p="20px"
          >
            Cloud-Native Computing Specialization
          </Text>
          <Text align={"center"} justifyContent="center" m="10px">
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </Text>
          <Flex
            alignContent={"center"}
            justifyContent="center"
            mr={"7px"}
            mt="140px"
          >
            <Link href="http://localhost:3000/cloud-computing"><Button
              bg={"blue.600"}
              color="white"
              variant={"solid"}
              alignContent="center"
              justifyContent={"center"}
            >
              Explore Now
            </Button></Link>
          </Flex>
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Box
          w={"300px"}
          h="400px"
          bg={"gray.100"}
          m="70px"
          borderRadius={"20px"}
        >
          <Text
            fontSize={"1rem"}
            fontWeight="800"
            alignItems="center"
            justifyItems={"center"}
            alignContent="center"
            justifyContent={"center"}
            p="20px"
          >
            Ambient Computing and IoT Specialization
          </Text>
          <Text align={"center"} justifyContent="center" m="10px">
            The Ambient Computing and IoT Specialization focuses on building
            Smart Homes, Offices, Factories, and Cities using Voice computing,
            Matter and Embedded Devices.
          </Text>
          <Flex
            alignContent={"center"}
            justifyContent="center"
            mr={"7px"}
            mt="90px"
          >
            <Link href="http://localhost:3000/ambient-programming">      <Button
              bg={"blue.600"}
              color="white"
              variant={"solid"}
              alignContent="center"
              justifyContent={"center"}
            >
              Explore Now
            </Button></Link>
          </Flex>
        </Box>
        <Box w={{ base: "100%", md: "60%" }} mt={{ base: "50px", md: "90px" }}>
          <Heading m={{ base: "8px", md: "15px" }} textAlign={{ base: "center", md: "left" }}>
            What Students Will Learn
          </Heading>
          <Text textAlign={"justify"} mb="40px" mr={{ base: "15px" }} ml={{ base: "15px" }}>
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>
          <Link href="http://localhost:3000/specializedtracks"><Button ml="15px" variant={"solid"}>Learn More</Button></Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default SectionNuts;
