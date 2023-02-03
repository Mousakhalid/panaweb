import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Section6() {
    return (
        <Box bg={"white"}>
            <Box >
                <Flex direction={{ base: "column", md: "row" }}>
                    <Box textAlign={"justify"} color={"gray.700"} m={{ base: "20px", md: "60px" }} mr="60px" w={{ base: "100%", md: "50%" }}>
                        <Heading fontSize={{ base: "1.4rem", md: "2rem" }} mb="10px">
                            Enabling transformation
                        </Heading>
                        <Text mb="10px" mr={{ base: "30px", md: "0px" }}>Your learning experience at Panaverse is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles:</Text>
                        <Heading fontSize={{ base: "1.4rem", md: "2rem" }} mb="10px">Experience</Heading>
                        <Text mr={{ base: "30px", md: "0px" }} mb="10px">Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</Text>
                        <Heading fontSize={{ base: "1.4rem", md: "2rem" }} mb="10px">Practice</Heading>
                        <Text mr={{ base: "30px", md: "0px" }} mb="10px">Demonstrating your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</Text>
                        <Heading fontSize={{ base: "1.4rem", md: "2rem" }} mb="10px">Apply</Heading>
                        <Text mr={{ base: "30px", md: "0px" }} mb="10px">Learning on Panaverse transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.</Text>
                    </Box>
                    <Box justifyContent={{ base: "center", md: "right" }} m="60px" w="50%">
                        <Image mt={{ base: "40px", md: "80px" }} src='/images/brain.webp' />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Section6
