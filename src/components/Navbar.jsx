import { Flex, useBreakpointValue } from "@chakra-ui/react";
import NavMD from "./NavMD";
import NavSM from "./NavSM";

export default function Navbar() {
  const navScreens = useBreakpointValue({ base: <NavSM />, md: <NavMD /> });

  return (
    <Flex
      height="50px"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      px={5}
    >
      {navScreens}
    </Flex>
  );
}
