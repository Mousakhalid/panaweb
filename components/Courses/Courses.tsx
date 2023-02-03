import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import SectionNuts from '../Section2/SectionNuts'
import Types from './Types'

function Courses() {
    return (
        <Box bg={"whitesmoke"}>
            <Box bg={"whitesmoke"} textAlign={"center"} pt="70px">
                <Heading> Detailed Course Syllabus</Heading>
                <h3>Quarter I (Core)</h3>
            </Box>
            <Types />
            <SectionNuts />
        </Box>
    )
}

export default Courses
