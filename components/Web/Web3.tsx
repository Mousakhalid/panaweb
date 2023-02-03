import { Box, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

function Web3() {
    return (
        <Box bg={"white"} p="50px">
            <Heading mt={"30px"} fontSize={"2rem"}>Quarter III Web3 and Metaverse</Heading>
            <Box>
                <Heading mt={"30px"} fontSize={"1.5rem"}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Heading>
                <Text mt={"30px"} fontSize={"1.2rem"}>Duration: 13 Weeks

                    Course Description:

                    In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                    <Link href='https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db'>The reasons for learning Web 2 before Web 3</Link>
                </Text>
            </Box>
            <Box>
                <Heading mt={"30px"} fontSize={"2rem"}>Quarter IV Web3 and Metaverse</Heading>
                <Box>
                    <Heading mt={"30px"} fontSize={"1.5rem"}>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Heading>
                </Box>
                <Text mt={"30px"} fontSize={"1.2rem"}>Duration: 13 Weeks

                    Course Description:

                    The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It’s unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.

                    Course Outline:

                    Open Metaverse Web Development</Text>
            </Box>
        </Box>
    )
}

export default Web3
