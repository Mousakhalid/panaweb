import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Courses3() {
    return (
        <Box color={"white"} bg={"#00262B"}>
            <Box>
                <Flex direction={{ base: "column", md: "row" }}>
                    <Box m="70px" w={"60%"}>
                        <Text mt="40px" mb="40px" fontFamily={"cursive"}>
                            Our Story
                        </Text>
                        <Heading mb="20px" textAlign={{ base: "left", md: "left" }} fontSize={{ base: "1.7rem", md: "2.7rem" }} fontFamily={"Arial"}>From experiment to global movement</Heading>
                        <Text mt="30px" textAlign={{ base: "left", md: "left" }} fontFamily={"Poppins"}>
                            The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
                        </Text>
                    </Box>
                    <Box m={{ base: "60px", md: "70px" }}>
                        <Image src='/images/zia.jpeg' />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Courses3
