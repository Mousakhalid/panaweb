import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function Courses2() {
    return (
        <Box bg={"white"}>
            <Box p={{ base: "20px", md: "50px" }} color={"gray.700"}>
                <Flex direction={{ base: "column", md: "row" }}>
                    <Box border={"1px red dashed"} p="30px" borderRadius={"20px"} m={"100px"}>
                        <Heading>4+ <br /> Course</Heading>
                    </Box>
                    <Box border={"1px red dashed"} p="30px" borderRadius={"20px"} m={"100px"}>
                        <Heading>3500+ <br /> Enrollments</Heading>
                    </Box>
                    <Box border={"1px red dashed"} p="30px" borderRadius={"20px"} m={"100px"}>
                        <Heading>4+ <br /> Cities</Heading>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Courses2
