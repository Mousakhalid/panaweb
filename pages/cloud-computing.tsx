import Cloud from '@/components/Web/Cloud'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function CloudComputing() {
    return (
        <Box>
            <Box>
                <Box bg={"white"} p="50px" textAlign={"center"}>
                    <Heading>Cloud Native Computing</Heading>
                </Box>
                <Cloud />
            </Box>
        </Box>
    )
}

export default CloudComputing
