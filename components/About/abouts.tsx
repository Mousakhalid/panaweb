import { Box, Flex, Heading, Image, List, ListItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'

function Abouts() {
    return (
        <Box mt={"30px"} ml="30px">
            <Flex direction={{ base: "column", md: "row" }}>
                <Box>
                    <Image h="320px" src='/images/impact.png' />
                </Box>
                <Box mt="30px" ml={{ base: "10px", md: "40px" }}>
                    <Heading color={"gray.800"} ml={{base:"10px",md:"20px"}} mb="40px">
                        Our Mission
                    </Heading>
                    <Text color={"gray.700"} ml={{base:"10px",md:"20px"}} mb="40px" lineHeight={"1.9"}>
                        There are three commitments we've made to the world. We've been grounded by these since day one:
                    </Text>
                    <List color={"gray.700"} ml={{base:"10px",md:"20px"}} mb="40px" lineHeight={"1.9"}>
                        <ListItem>Increase access to high-quality education for everyone, everywhere</ListItem>
                        <ListItem>Enhance teaching and learning on campus and online</ListItem>
                        <ListItem>Advance teaching and learning through research</ListItem>
                    </List>

                </Box>
            </Flex>
        </Box>
    )
}

export default Abouts
