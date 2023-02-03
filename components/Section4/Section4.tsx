import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import SectionHeads from "./SectionHeads";

function Section4() {
  return (
    <Box bg={"white"} mt="5px">
      <hr />
      <SectionHeads />
      <Box mt={{ base: "90px", md: "140px" }} h={{ base: "570px", md: "340px" }}>
        <Box
          ml={{ base: "30px", md: "90px" }}
          bg="gray.100"
          h={{ base: "540px", md: "210px" }}
          mr={{ base: "30px", md: "90px" }}
          borderRadius="20px"
        >
          <Flex p={"50px"}>
            <Flex
              direction={{ base: "column", md: "column" }}
              w={{ base: "100%", md: "70%" }}
            >
              <Heading color={"gray.800"}>The Program in a Nutshell</Heading>
              <Text color={"blackAlpha.700"} textAlign={"justify"}>
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program’s beginning. It
                resembles a cross between a corporate venture and an educational
                project.
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
                Our Programs
              </Button>
            </Flex>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            ml={{ base: "30px", md: "50px" }}
            w={{ base: "100%", md: "0" }}
            direction={{ base: "row" }}
            align={"center"}
          >
            <Link href="https://piaic.org"><Button bg={"blue.300"} mr="30px">
              Apply Now
            </Button></Link>
            <Link href="http://localhost:3000/syllables"><Button
              padding={{
                base: "13px 15px 13px 15px",
                md: "13px 20px 13px 20px",
              }}
              colorScheme={"teal"}
              variant="outline"
            >
              Our Programs
            </Button></Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Section4;
