import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import KeepSmilingPic from '../../assets/images/keepsmiling-ks.png'

const Header = () => {
  return (
    <Box h="15rem" p={6}>
      <Image src={KeepSmilingPic} alt="keepsmiling" mx="auto" />
    </Box>
  )
}

export default Header
