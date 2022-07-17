import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';


export const wrapRootElement = ({ element }) => {
  return (
    <Scrollbars style={{ width: "100vw", height: "100vh"}}>
      {element}
    </Scrollbars>
  );
}
