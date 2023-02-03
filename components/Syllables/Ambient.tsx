import React from 'react'
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
function Ambient() {
    return (
        <Box borderRadius={"30px"}>
            <Box mt="50px">

                <Flex direction={{ base: "column", md: "row" }} p="50px">
                    <Box width={{ base: "100%", md: "50%" }} m="20px">
                        <Image borderRadius={"20px"} ml={{ base: "0", md: "40px" }} mr={{ base: "10px" }} h={{ base: "160px", md: "200px" }} src='/images/ambient.png' />
                    </Box>
                    <Box m={{ base: "10px", md: "20px" }} width={{ base: "100%", md: "50%" }}>
                        <Heading ml={{ base: "5px", md: "40px" }} fontSize={{ base: "1.2rem", md: "1.4rem" }} fontWeight={"900"} textAlign={{ base: "center", md: "left" }}>Ambient Computing and IoT Specialization
                        </Heading>
                        <Text ml={{ base: "15px", md: "40px" }} mt="40px" lineHeight={"1.7"} textAlign={"justify"}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.</Text>
                        <br />
                        <Link fontSize={{ base: "7px", md: "13px" }} href='https://www.panaverse.co/' color={"blue.600"} textDecoration="underline" >Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices</Link>
                        <br />
                        <Link fontSize={{ base: "7px", md: "13px" }} href='https://www.panaverse.co/' color={"blue.600"} textDecoration="underline" >Quarter IV AC-361: Embedded Programming using C and Rust</Link>
                    </Box>

                </Flex>
            </Box>
        </Box>
    )
}

export default Ambient
