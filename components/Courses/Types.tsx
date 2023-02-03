import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { AiFillCode } from 'react-icons/ai';

import React from 'react'
import Courses1 from './Courses1';
import Courses2 from './Courses2';

function Types() {
    return (
        <Box mt="40px">
            <Flex>

                <Box border={"1px solid red"} padding="50px" borderRadius={"30px"} m="40px" textAlign={"left"}>
                    <Heading mb="20px" fontSize={"1.4rem"}> <AiFillCode color='black' />CS-101: Object-Oriented Programming using TypeScript</Heading>
                    <Text fontSize={"1rem"} textAlign="justify">Duration: 13 Weeks

                        Course Description:

                        We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</Text>
                </Box>
                <Box>

                </Box>
            </Flex>
            <Courses1 />
            <Courses2 />
        </Box>
    )
}

export default Types
