import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'

function Cloud() {
    return (
        <Box bg="white" p="50px" textAlign={"center"}>
            <Box >
                <Link href='http://piaic.org'><Button mt="20px">Click Here</Button></Link>
                <Text mt="20px">Not Avaialable Right Now</Text>
            </Box>

        </Box>
    )
}

export default Cloud
