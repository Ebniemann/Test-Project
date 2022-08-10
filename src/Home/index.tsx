import {
  Presentation,Title, SubTitle, Button,
  SectionExplanation, ExplanationTitle, 
  TextExplanation, Img, 
  Text, Test, Footer} from "./styles";
import Header from "../components/Header";
import AdvantageCard from "../components/AdvantageCard";
import TryCard from "../components/TryCard";
import Form from "../components/Form";


const Component=()=>{
  return(
    <>
    <Header/>
    <Presentation>
      <Title>Hace crecer <br/> tu negocio</Title>
      <Text>Sistema de gestión online que soluciona tus problemas de stock, permite el control de los ingresos y los gastos de tu empresa.</Text>
      <Button>Probar</Button>
    </Presentation>
      <SectionExplanation>
        <ExplanationTitle>¿Qué es ...?</ExplanationTitle>
        <SubTitle>La mayor fortaleza de tu empresa.</SubTitle>
        <TextExplanation>Es un sistema de gestión totalmente online, desarrollado para gestionar y administrar tu empresa, brindando la más precisa información que necesitás para una correcta toma de decisiones. Gracias a su arquitectura, Kiboo cuenta con la posibilidad de implementarse en tu organización ya que es adaptable a tus necesidades.
        A partir de su implementación, Kiboo será la fortaleza que tu empresa necesita para crecer.</TextExplanation>
        <Img></Img>
      </SectionExplanation>
      <SectionExplanation>
        <ExplanationTitle>Conveniente</ExplanationTitle>
        <SubTitle>La mejor relación costo beneficio.</SubTitle>
        <TextExplanation>Accedé a todas las funcionalidades de Kiboo a muy bajo costo y sin necesidad de invertir en licencias ni en hardware. Disponé de actualizaciones y capacitación online sin tener que sumar gastos extras.</TextExplanation>
        <Img></Img>
      </SectionExplanation>
      <SectionExplanation>
        <ExplanationTitle>Completo y adaptable</ExplanationTitle>
        <SubTitle>Todo lo que tu empresa necesita y más.</SubTitle>
        <TextExplanation>Las funcionalidades de Kiboo son adaptables a tu empresa, por lo que encontrarás en cada uno de los módulos que componen al sistema, la solución más apropiada para simplificar y controlar todos los procesos de cada área.</TextExplanation>
        <Img></Img>
      </SectionExplanation>
    <AdvantageCard/>
    <Test>
      <TryCard/>
      <Form/>
    </Test>
    <Footer>By Evelina Niemann</Footer>
   
    </>
  )
};

export default Component;