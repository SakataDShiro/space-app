import { styled } from 'styled-components';
import tags from './tags.json'

const TagsContainer = styled.div`
    display: flex;

    p {
        padding: 10px;
        color: white;
    }
    button {
        height: 30px;
        border-radius: 10px;
        background-color: rgba(217, 217, 217, 0.3);
        color: white;
        margin: 20px 10px 20px 10px;
        box-shadow: none;
        border: 1px solid rgba(217, 217, 217, 0.3) ;
        background-clip: padding-box;
    }

    button:hover {
        border-color: rgba(201, 140, 241, 1);
    }
`

const Tags = ({fotos, setFotosDeGaleria}) => {

    const filtrarTag = (event)=> {
        event.preventDefault();
        if(event.target.innerText == "Todas" || ""){
            setFotosDeGaleria(fotos)
        }else
        {const fotosFiltradas = fotos.filter((foto)=> 
            event.target.innerText.includes(foto.tag)  
        )
        console.log(fotosFiltradas)
        setFotosDeGaleria(fotosFiltradas);}
    }

    return <TagsContainer>
    <p>Buscar Por Tags</p>
    {tags.map(tag => {
        return <button onClick={filtrarTag} key={tag.id}>{tag.titulo} </button>
    })}
    </TagsContainer>

 }

export default Tags