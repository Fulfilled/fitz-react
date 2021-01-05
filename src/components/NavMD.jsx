import { Box, Flex, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

const navStyle = {
    margin: "0 5px",
  };

function NavMD(props) {
    return (<>
        <Box>Logo</Box>
        <Box>
          <NavLink exact to="/" activeClassName="active" style={navStyle}>
            Home
          </NavLink>
  
          <NavLink exact to="/about" activeClassName="active" style={navStyle}>
            About
          </NavLink>
  
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
        </Box>
        </>
    );
}

export default NavMD;