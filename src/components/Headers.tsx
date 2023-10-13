import React, { useContext } from 'react';
import './styles.css';
import { PrincipalContext } from '../context/PrincipalContext';



export const Headers = () => {
  let {handleChangeScreen, actualScreen, handleChangeScreenName, actualScreenName } = useContext(PrincipalContext)


  return (
    <div className='princ-header'>
      <h2 className='titulo-headers'>{actualScreenName}</h2>
    </div>
  );
};
