import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillCode } from 'react-icons/ai'

function Courses1() {
    return (
        <Box>
            <Box textAlign={"center"}><h2>Quarter II (Core)</h2></Box>
            <Box border={"1px solid red"} padding="50px" borderRadius={"30px"} m="40px" textAlign={"left"}>
                <Heading mb="20px" fontSize={"1.4rem"}> <AiFillCode color='black' />W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
                <Text fontSize={"1rem"} textAlign="justify">Duration: 13 Weeks

                    Course Description:

                    The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).</Text>
            </Box>
        </Box>
    )
}

export default Courses1
