import React from 'react'
import styled from '@emotion/styled'

import CommonHelmet from './CommonHelmet.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import '../styles/style.scss'


const StyledRoot = styled.div`
  display: grid;
  grid-auto-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const StyledContents = styled.main`
  padding: 16px;
  max-width: 980px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <StyledRoot>
      <CommonHelmet />

      <Header />

      <StyledContents>
        {children}
      </StyledContents>

      <Footer />
    </StyledRoot>
  )
}

export default Layout
