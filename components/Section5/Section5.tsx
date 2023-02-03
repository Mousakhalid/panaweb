import { ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import SectionCourse from './SectionCourse'

function Section5() {
  return (
    <Box bg={"#00262B"} h={{ base: "2000px", md: "800px" }}>
      <Box>
        <Flex direction="row">

          <Flex color={"white"} direction={{ base: "column", md: "row" }}>
            <Box>
              <Heading textAlign={{ base: "center", md: "left" }} width={{ base: "100%", md: "50%" }} fontSize={{ base: "1.4rem", md: "1.7rem" }} fontWeight={{ base: "600", md: "800" }} ml={{ base: "10px", md: "50px" }} mr={{ base: "15px" }} mt="70px" color={"white"}>The Outcome for Participants of the Program
              </Heading>
              <Text textAlign={"justify"} width={{ base: "70%", md: "50%" }} m={{ base: "50px", md: "50px" }} color={"white"}>The graduates of this program will own products
                (Full-Stack App Templates, AR and VR Experiences, and APIs)
                that are marketed globally by the Panaverse DAO and, if they like,
                will also be able to start off by offering services at a rate of
                $50 per hour ($96,000 per year). This would give Pakistani professionals
                and students a fantastic opportunity to better their financial situation
                while also giving the economy a much-needed boost by expanding software exports.
              </Text>
            </Box>
            <Box color={"gray.400"} mt={{ base: "30px", md: "90px" }}>
              <Heading ml={{ base: "10px", md: "-450" }} mt={"7px"} color="white">Important Links</Heading>
              <Flex ml={{ base: "10px", md: "-450" }} mt={"7px"} mr="6px">
                <ArrowRightIcon w="15px" h="15px" />
                <Link href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms' mt="-1" ml="10px">
                  Top 5 ‘Metaverse’ jobs that will rule the future of tech industry</Link >
              </Flex>
              <Flex ml={{ base: "10px", md: "-450" }} mt={"7px"} mr="6px">
                <ArrowRightIcon w="15px" h="15px" />
                <Link href='https://web3.career/web3-salaries/blockchain-developer' mt="-1" ml="10px">
                  Blockchain Developer Salary - Jun 2022
                </Link >
              </Flex>
              <Flex ml={{ base: "10px", md: "-450" }} mt={"7px"} mr="6px">
                <ArrowRightIcon w="15px" h="15px" />
                <Link href='https://thedefiant.io/web3-soaring-salaries/' mt="-1" ml="10px">
                  Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Link >
              </Flex>
              <Flex ml={{ base: "10px", md: "-450" }} mt={"7px"} mr="6px">
                <ArrowRightIcon w="15px" h="15px" />
                <Link href='https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022' mt="-1" ml="10px">
                  The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</Link >
              </Flex>
              <Flex ml={{ base: "10px", md: "-450" }} mt={"7px"} mr="6px">
                <ArrowRightIcon w="15px" h="15px" />
                <Link href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/' mt="-1" ml="10px">
                  How To Become Metaverse Developer: Scope, Skills, and Salary</Link >
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <SectionCourse />
    </Box>
  )
}

export default Section5
