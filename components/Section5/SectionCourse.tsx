import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

function SectionCourse() {
    return (
        <Box color={"white"}>
            <Box >
                <Flex direction={{ base: "column", md: "row" }}>
                    <Box mt={{ base: "50px", md: "0" }} mb={{ base: "50px", md: "0" }} w={{ base: "90%", md: "40%" }} ml={{ base: "10px", md: "20px" }} >
                        <Image src='/images/aiimage.png' h="350px" />
                    </Box>
                    <Box textAlign={"center"} w={{ base: "100%", md: "60%" }} >
                        <Heading fontSize={{ base: "1.4rem", md: "1.7rem" }}>Core Courses (Common in All Specializations)</Heading>
                        <Text ml="30px" mr="30px" textAlign={"justify"} mt={{ base: "20px", md: "10px" }}>
                            Every participant of the program will start by completing the following two core courses:
                            <br />


                            <Link href='https://github.com/panaverse/panaverse.github.io#quarter-i-core'>Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript
                            </Link>
                            <br />
                            <Link href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core'>Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                            </Link>


                        </Text>
                        <Text ml={{ base: "20px", md: "30px" }} mr={{ base: "20px", md: "30px" }} color={"gray.400"} mt="20px" textAlign={"justify"}>Specialized Tracks
                            After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
                            <Button mt="20px"
                            _hover={{ color: "white", bg: "black" }} variant="outline">
                            <Link href='http://localhost:3000/specializedtracks'>More Info</Link>
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default SectionCourse
