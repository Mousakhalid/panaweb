import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Ambient from './Ambient'
import Artificial from './Artificial'
import Cloud from './Cloud'
import Web3 from './Web3'

function Syllables() {
    return (
        <Box textAlign={"center"} >
            <Box mt="70px">
                <Heading mb="20px" color={"blackAlpha.800"}>Specialized Tracks</Heading>
                <Text fontFamily="sans-serif">After completing the first two quarters the participants will
                    select one or more specializations consisting of two courses each:</Text>
            </Box>
            <Web3 />
            <Artificial />
            <Cloud />
            <Ambient />
        </Box>
    )
}

export default Syllables
