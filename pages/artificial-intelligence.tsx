import Artificial from '@/components/Web/Artificial'
import { Box, Button, Heading, Link } from '@chakra-ui/react'
import React from 'react'

function ArtficialIntelligence() {
    return (
        <Box bg={"white"} p="50px" textAlign={"center"} >
            <Heading mt="50px">Artificial Intelligence</Heading>
            <Link  href='https://piaic.org'><Button mt="20px">Click Here</Button></Link>
            <Artificial />
        </Box>
    )
}

export default ArtficialIntelligence
