import Web3 from '@/components/Web/Web3'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function Web3andMetaverse() {
    return (
        <Box>
            <Box p="50px">
                <Heading textAlign={"center"}>
                    Web 3 and Metaverse Specialization
                </Heading>
            </Box>
            <Web3 />
        </Box>
    )
}

export default Web3andMetaverse
