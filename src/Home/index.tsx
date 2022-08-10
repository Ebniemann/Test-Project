import {Presentation, Title, Button,Text, Test, Footer} from "./styles";
import Header from "../components/Header";
import ExplanationCard from "../components/ExplanationCard"
import AdvantageCard from "../components/AdvantageCard";
import TryCard from "../components/TryCard";
import Form from "../components/Form";


const Component=()=>{
  return(
    <>
    <header>
      <meta charSet="utf-8"/>
    </header>
    <Header/>
    <Presentation>
      <Title>Hace crecer <br/> tu negocio</Title>
      <Text>Sistema de gestión online que soluciona tus problemas de stock, permite el control de los ingresos y los gastos de tu empresa.</Text>
      <Button>Probar</Button>
    </Presentation>
    <ExplanationCard/>
    <AdvantageCard/>
    <Test>
      <TryCard/>
      <Form/>
    </Test>
    <Footer>By Evelina Niemann ❤️ 🎉 💥 </Footer>
    </>
  )
};
export default Component;