import { Flex, Menu } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Navbar.module.css";
function Desktop() {
  return (
    <Menu>
      <Flex
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        align="center"
        ml={"290px"}
      >
        <Flex alignItems={"center"} justifyContent="space-between">
          <Link href="/" className={styles.spacingLink}>
            Home
          </Link>
          <Link href="/about" className={styles.spacingLink}>
            About
          </Link>
          <Link href="/contact" className={styles.spacingLink}>
            Contact
          </Link>
          <Link href="/admissions" className={styles.spacingLink}>
            Admissions
          </Link>
          <Link href="/content" className={styles.spacingLink}>
            Content
          </Link>
        </Flex>
      </Flex>
    </Menu>
  );
}

export default Desktop;
