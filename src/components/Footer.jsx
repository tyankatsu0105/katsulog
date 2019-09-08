import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
text-align: center;
font-size: 1.4rem;
padding: 24px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <small>
        since 2019 9.8~
      </small>
    </StyledFooter>
  )
}

export default Footer