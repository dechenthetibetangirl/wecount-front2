import { ChakraProvider } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ChakraWrapperProps {
  children: ReactNode;
}

const ChakraWrapper: React.FC<ChakraWrapperProps> = ({ children }) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};

export default ChakraWrapper;
