import React from 'react'
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

function Cloud() {
    return (
        <Box bg="white" borderRadius={"30px"}>
            <Box mt="50px">

                <Flex direction={{ base: "column", md: "row" }} p="50px">
                    <Box m={{ base: "10px", md: "20px" }} width={{ base: "100%", md: "50%" }}>
                        <Heading ml={{ base: "5px", md: "40px" }} fontSize={{ base: "1.2rem", md: "1.4rem" }} fontWeight={"900"} textAlign={{ base: "center", md: "left" }}>Cloud-Native Computing Specialization
                        </Heading>
                        <Text ml={{ base: "15px", md: "40px" }} mt="40px" lineHeight={"1.7"} textAlign={"justify"}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                        <br />
                        <Link fontSize={{ base: "7px", md: "13px" }} href='https://www.panaverse.co/' color={"blue.600"} textDecoration="underline" >Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)</Link>
                        <br />
                        <Link fontSize={{ base: "7px", md: "13px" }} href='https://www.panaverse.co/' color={"blue.600"} textDecoration="underline" >Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Link>
                    </Box>
                    <Box width={{ base: "100%", md: "50%" }} m="20px">
                        <Image borderRadius={"20px"} ml={{ base: "0", md: "40px" }} mr={{ base: "10px" }} h={{ base: "160px", md: "200px" }} src='/images/CloudComputing.jpg' />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Cloud
