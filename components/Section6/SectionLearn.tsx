import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function SectionLearn() {
    return (
        <Box p="50px" bg={"#00262B"}>
            <Box color={"white"}>
                <Heading fontSize={"3rem"}><span style={{ color: "#03C7E8" }}>More opportunities</span> for you to learn</Heading>
                <Text fontSize={"1.4rem"}>We've added onsite and online learning opportunities to create one of the world's most comprehensive free-to-degree online learning platform.</Text>
            </Box>
        </Box>
    )
}

export default SectionLearn
