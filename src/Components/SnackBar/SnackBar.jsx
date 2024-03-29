import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WarningIcon from '@mui/icons-material/Warning';

const StyledSnackBar = styled.div`
  position: fixed;
  bottom: 8px;
  left: 8px;
  padding: 16px;
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
  ${({ color }) => color === 'green' && css`
    background-color: #388e3c;
  `}
  ${({ color }) => color === 'red' && css`
    background-color: #d32f2f;
  `}
  ${({ color }) => color === 'orange' && css`
    background-color: #ff8c00;
  `}
`;

const SnackBar = (props) => {
  const { message } = props;
  const { color, text, icon } = message;

  const [showSnackbar, setShowSnackbar] = useState();

  useEffect(() => {
    setShowSnackbar(true);
    const timeoutId = setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [message]);


  return (
    showSnackbar && (
      <StyledSnackBar color={color}>
        <span>
          {icon === 'success' && <CheckIcon />}
          {icon === 'error' && <HighlightOffIcon />}
          {icon === "warning" && <WarningIcon />}
        </span>
        <span style={{ marginBottom: "6px", marginLeft: "12px", fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>{text}</span>
      </StyledSnackBar>
    )
  );
};

export default SnackBar;
