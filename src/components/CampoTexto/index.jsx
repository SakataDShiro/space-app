import { styled } from "styled-components"
import { useEffect } from "react";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    img{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 38px !important;
        height: 38px;
    
    }
`

const CampoTexto = (props) => {

    const {buscar, setBuscar, fotos, setFotosDeGaleria} = props

    useEffect(()=>{
        const fotosFiltradas= fotos.filter((foto) =>
        foto.titulo.includes(buscar));
        setFotosDeGaleria(fotosFiltradas)
        },[buscar])

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado src="/iconos/search.png" alt="search" 
            type="text"
            placeholder="Busca una foto"
            value={buscar} 
            onChange={(e) => setBuscar(e.target.value)}>
            
            </CampoTextoEstilizado>
        </ContainerEstilizado>
    )
}

export default CampoTexto;