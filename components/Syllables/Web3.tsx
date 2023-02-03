import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

function Web3() {
    return (
        <Box bg="white" borderRadius={"30px"}>
            <Box mt="50px">

                <Flex direction={{ base: "column", md: "row" }} p="50px">
                    <Box m={{ base: "10px", md: "20px" }} width={{ base: "100%", md: "50%" }}>
                        <Heading ml={{ base: "5px", md: "40px" }} fontSize={{ base: "1.2rem", md: "1.4rem" }} fontWeight={"900"} textAlign={{ base: "center", md: "left" }}>Web 3.0 (Blockchain) and Metaverse Specialization
                        </Heading>
                        <Text ml={{ base: "15px", md: "40px" }} mt="40px" lineHeight={"1.7"} textAlign={"justify"}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentra
                            lized distributed blockchains with 3D metaverse client experiences.</Text>
                        <br />
                        <Link fontSize={{base:"7px",md:"13px"}} href='https://www.panaverse.co/' color={"blue.600"} textDecoration="underline" >Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Link>
                        <br />
                        <Link fontSize={{base:"7px",md:"13px"}} href='https://www.panaverse.co/' color={"blue.600"} textDecoration="underline" >Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Link>
                    </Box>
                    <Box width={{ base: "100%", md: "50%" }} m="20px">
                        <Image borderRadius={"20px"} ml={{ base: "0", md: "40px" }} mr={{ base: "10px" }} h={{ base: "160px", md: "200px" }} src='/images/960x0.jpg' />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Web3