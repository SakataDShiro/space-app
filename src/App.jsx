import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"
import Titulo from "./components/Titulo"
import Populares from "./components/Galeria/Populares"
import Tags from "./components/Galeria/Tags"
import Imagen from "./components/Galeria/Imagen"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`
const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap:24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  const [buscar, setBuscar] = useState("")

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })

    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera buscar={buscar} setBuscar={setBuscar} fotos={fotos} setFotosDeGaleria={setFotosDeGaleria} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />

              <Galeria >
                <>
                    <Tags setFotosDeGaleria={setFotosDeGaleria} fotos={fotos} />
                    <GaleriaContainer>
                        <SeccionFluida>
                            <Titulo>Navegue por la galería</Titulo>
                            <ImagenesContainer>
                                {fotosDeGaleria.map(foto => <Imagen
                                alAlternarFavorito= {alAlternarFavorito}
                                alSolicitarZoom={foto => setFotoSeleccionada(foto)}
                                    key={foto.id}
                                    foto={foto} />)
                                }
                            </ImagenesContainer>
                        </SeccionFluida>
                        <Populares />

                    </GaleriaContainer>
                </>
                </Galeria>
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
         <Pie/>
      </FondoGradiente>
    </>
  )
}

export default App
