import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader/index'
import IconesHeader from '../IconesHeader/index'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function Header () {
  return (
    <HeaderContainer>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
    </HeaderContainer>
  )
}

export default Header