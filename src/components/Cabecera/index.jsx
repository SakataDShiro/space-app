import styled from "styled-components"
import CampoTexto from "../CampoTexto"


const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = ({buscar, setBuscar, fotos, setFotosDeGaleria}) => {

    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto buscar={buscar} setBuscar={setBuscar} fotos={fotos} setFotosDeGaleria={setFotosDeGaleria} />
    </HeaderEstilizado>
}

export default Cabecera