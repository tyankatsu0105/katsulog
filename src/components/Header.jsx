import React from 'react'
import { Link } from "gatsby"
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  text-align: center;
`;


const StyledLink = styled(props => <Link {...props} />)`
  font-size: 4rem;
  font-weight: bold;
`;

const StyledDescription = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">かつろぐ</StyledLink>
      <StyledDescription>
        チャンカツのログ
      </StyledDescription>
      
    </StyledHeader>
  )
}

export default Header