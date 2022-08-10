import Logo from "../../assets/logo-3.jpg";
import {Header, Img, Menu, LinkItem} from "./styles"

const Component=()=>{
  return(
    <>
      <Header>
       <Img src={Logo} alt="logo" width="150px" height="150px"/>
       <Menu>
        <LinkItem href="">Nosotros</LinkItem>
        <LinkItem href="">Beneficios</LinkItem>
        <LinkItem href="">Mes Gratis</LinkItem>
       </Menu>
      </Header>
    </>
  )
}

export default Component;