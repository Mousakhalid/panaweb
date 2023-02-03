import Abouts from '@/components/About/abouts'
import Courses2 from '@/components/Courses/Courses2'
import Courses3 from '@/components/Courses/Courses3'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
    return (
        <Box>
            <Box>
                <Flex>
                    <Box width={{ base: "100%", md: "80%" }} bg="#00262B">
                        <Box ml={{ base: "30px", md: "120px" }} mt="80px">
                            <Text color={"white"}> About Us</Text>
                            <Heading fontSize={{ base: "3rem", md: "4rem" }} color={"white"}>Transformation <br /> <span style={{ color: "crimson" }}>through education</span></Heading>
                        </Box>
                    </Box>
                    <Box display={{ base: "none", md: "flex" }} width={{ base: "100%", md: "30%" }}>
                        <Image src='/images/about-us.png' />
                    </Box>
                </Flex>
            </Box>
            <Box m={{ base: "30px", md: "140px" }}>
                <Text textAlign={"justify"}>
                    Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2012, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.”
                </Text>
            </Box>
            <Abouts />
            <Courses2 />
            <Courses3 />
        </Box>
    )
}

export default About
