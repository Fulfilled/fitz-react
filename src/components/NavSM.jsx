import React from "react";
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { BiMenuAltLeft } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import NavSMDrawer from "./NavSMDrawer";
const navStyle = {
  margin: "0 5px",
};

function NavSM(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <NavSMDrawer isOpen={isOpen} onClose={onClose}/>
     <IconButton
     onClick={onOpen}
          bg="transparent"
          aria-label="Go to cart"
          _focus={{
            boxShadow: "0",
          }}
          icon={
      <span
        style={{
          fontSize: "22px",
        }}
      >
        <BiMenuAltLeft />
      </span>
       }
       />

      <Box>Logo</Box>

      <NavLink exact to="/cart" activeClassName="active" style={navStyle}>
        <IconButton
          bg="transparent"
          aria-label="Go to cart"
          _focus={{
            boxShadow: "0",
          }}
          icon={
            <span
              style={{
                fontSize: "22px",
              }}
            >
              <RiShoppingCartLine />
            </span>
          }
        />
      </NavLink>
    </>
  );
}

export default NavSM;
