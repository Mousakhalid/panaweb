import { Box, Button, Heading, Link } from '@chakra-ui/react'
import React from 'react'

function Ambient() {
    return (
        <Box textAlign={"center"}>
            <Box bg="white" p="50px">
                <Box mt="10px">
                    <Link><Button  mt="20px">Click Here</Button></Link>
                    <Heading fontSize={"1.4rem"} mt="20px">Not Available Right Now</Heading>
                </Box>
            </Box>
        </Box>
    )
}

export default Ambient
