import {Section, SectionExplanation, ExplanationTitle, SubTitle, TextExplanation, Img, } from "./styles"
import Primera from "../../assets/explanation/primera.jpg";
import Segunda  from "../../assets/explanation/segunda.jpg";
import Tercera from "../../assets/explanation/tercera.jpg";


export const Component = () =>{
  return(
    <>
    <Section>
      <SectionExplanation>
        <ExplanationTitle>¿Qué es ...?</ExplanationTitle>
        <SubTitle>La mayor fortaleza de tu empresa.</SubTitle>
        <TextExplanation>Es un sistema de gestión totalmente online, desarrollado para gestionar y administrar tu empresa, brindando la más precisa información que necesitás para una correcta toma de decisiones. Gracias a su arquitectura, Kiboo cuenta con la posibilidad de implementarse en tu organización ya que es adaptable a tus necesidades.
          A partir de su implementación, Kiboo será la fortaleza que tu empresa necesita para crecer.</TextExplanation>
      </SectionExplanation>
      <Img src={Primera} alt="uno" width="540px" height="auto"></Img>
    </Section>

    <Section>
      <Img src={Segunda} alt="dos" width="540px" height="auto"></Img>
      <SectionExplanation>
        <ExplanationTitle>Conveniente</ExplanationTitle>
        <SubTitle>La mejor relación costo beneficio.</SubTitle>
        <TextExplanation>Accedé a todas las funcionalidades de Kiboo a muy bajo costo y sin necesidad de invertir en licencias ni en hardware. Disponé de actualizaciones y capacitación online sin tener que sumar gastos extras.</TextExplanation>
      </SectionExplanation>
    </Section>

    <Section>
      <SectionExplanation>
        <ExplanationTitle>Completo y adaptable</ExplanationTitle>
        <SubTitle>Todo lo que tu empresa necesita y más.</SubTitle>
        <TextExplanation>Las funcionalidades de Kiboo son adaptables a tu empresa, por lo que encontrarás en cada uno de los módulos que componen al sistema, la solución más apropiada para simplificar y controlar todos los procesos de cada área.</TextExplanation>
      </SectionExplanation>
      <Img src={Tercera} alt="tres" width="540px" height="auto"></Img>
    </Section>
    </>
  )
}

export default Component;