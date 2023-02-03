import Ambient from '@/components/Web/Ambient'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function AmbientProgramming() {
    return (
        <Box>
            <Box p="50px" textAlign={"center"}>
                <Heading>Ambient Programming And IOT specialization</Heading>
            </Box>
            <Box>
                <Ambient />
            </Box>
        </Box>
    )
}

export default AmbientProgramming
