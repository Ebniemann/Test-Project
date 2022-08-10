import {TryCard, TrySection, Title, SubTitle, Text, ContactSection, FooterTitle,Direction,
Phone, Mail,} from "./styles"

const Component =() =>{
  return(
    <>
    <TryCard>
      <TrySection>
        <Title>¡Probanos!</Title>
        <SubTitle>Nos encantaría mostrarte <br/>como funciona nuestro Sistema</SubTitle>
        <Text>Un asesor especializado te contactará de inmediato para conocer tus necesidades y agendar una demo. 
          <br/> 
          Nuestras demos no son estándar. Te mostramos como se adaptan nuestras soluciones a las necesidades de tu negocio.</Text>
      </TrySection>

      <ContactSection>
        <FooterTitle>Contactanos</FooterTitle>
        <Direction>Cañada Office, Av. Colón 555 - Of. Piso 7 - Bs. As</Direction>
        <Phone>+54 xxxxxx-xxxx</Phone>
        <Mail>hola@eve.com</Mail>
      </ContactSection>
    </TryCard>
    </>
  )
}

export default Component;