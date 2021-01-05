import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
  } from "@chakra-ui/react"

function NavSMDrawer(props) {
    console.log(props)
    return (
     <Drawer placement='left' onClose={props.onClose} isOpen={props.isOpen}>
        <DrawerOverlay>
          <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader className='rfont' borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
            <DrawerFooter>
              
      <Box w='100%' textAlign='center'>Logo</Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
}

export default NavSMDrawer;