import React, { Fragment } from "react";
import Planet from "./planet";
import Mercurio from '../../shared/grey-img/Mercurio.png'

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta! ${name}`)
}

const Planets = () => {
  return (
    <Fragment>
      
      <h3>Planet List</h3>
      <button>Show Message</button>
      <Planet 
      name="Mercúrio"
      text = "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino"
      url="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      name_url="Mercúrio (planeta)"
      img_url={Mercurio}
      clickOnPlanet={clickOnPlanet}
      />
      <Planet 
      name="Plutão"
      text = "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno."
      url="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      name_url="Plutão"
      img_url="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sonda-new-horizons-registrou-imagem-plutao-em-julho-2015-55a55da01dda4.jpg"
      clickOnPlanet={clickOnPlanet}
      />
      
    </Fragment>
  )
}

export default Planets;