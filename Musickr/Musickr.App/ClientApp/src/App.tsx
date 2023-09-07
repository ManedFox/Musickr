import React from 'react';

import {ChakraProvider} from "@chakra-ui/react";

import {
  QueryClient, 
  QueryClientProvider
} from "react-query";
import { Route, Routes } from 'react-router-dom';
import {QueryParamProvider} from "use-query-params";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";

import AppRoutes from './AppRoutes';
import theme from "./components/Utils/theme";

const queryClient = new QueryClient();
const App : React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </QueryParamProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;