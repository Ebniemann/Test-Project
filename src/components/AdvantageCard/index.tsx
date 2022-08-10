import {AdvantageCard, Card, Img, Title, Text} from "./styles"
import candado from "../../assets/icons/candado.png";
import comunicacion from "../../assets/icons/comunicacion.png";
import descarga from "../../assets/icons/descarga.png";
import tilde from "../../assets/icons/tilde.png";

const Component=()=>{
  return(
    <AdvantageCard className="Grid">
    <Card>
      <Img src={descarga} alt="descarga" width="50px" height="50px" />
      <Title>Servicio Online</Title>
      <Text>Es un sistema que se ejecuta en forma WEB, lo cual te permite almacenar toda la información referente a tu negocio en línea y poder acceder a ella desde cualquier lugar y en cualquier momento, permitiéndote aumentar la productividad de tu negocio.</Text>
    </Card>
    
    <Card>
      <Img src={comunicacion} alt="comunicacion" width="50px" height="50px" />
      <Title>Información al Instante</Title>
      <Text>Te ofrecemos un amplio abanico de reportes con la información certera y confiable para una correcta toma de decisiones.</Text>
    </Card>

    <Card>
      <Img src={tilde} alt="tilde" width="50px" height="50px"/>
      <Title>Simpleza</Title>
      <Text>Ha sido pensado para simplificar la administración de tu negocio. Al implementar Kiboo podrás acceder a vídeos instructivos que te permitirán capacitar fácil y rápidamente a tu personal.</Text>
    </Card>

    <Card>
      <Img src={candado} alt="candado"  width="50px" height="50px" />
      <Title>Seguridad</Title>
      <Text>Te permite configurar distintos niveles de acceso para los usuarios de tu organización. Además, brindamos un servicio de BackUp diario para resguardar la información de tu negocio.</Text>
    </Card>

    </AdvantageCard>
  )
}

export default Component;