import { useLayoutEffect } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseImgUrl, getMovieDetails } from "utils/fetch-movies"
import { Actor, CastList } from "./Cast.styled"

const CastItem = ({name, character, profile_path: imgUrl}) => {

    const photoPlaceholderUrl = 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
    
    return (
        <Actor>
            <img className="photo" src={imgUrl ? (baseImgUrl + imgUrl) : photoPlaceholderUrl} alt={name + " photo"}/>
            <p className="name">{name}</p>
            <p><b>Character:</b> {character}</p>
        </Actor>
    )
}

export const Cast = () => {
    const {id} = useParams(); 
    const [cast, setCast] = useState([]);

    useEffect(()=> {
        const getCast = async() => {
            const castList = await(await(getMovieDetails({type: 'cast', id}))).data.cast;
            setCast(castList);
        }
        getCast();
    }, [id]);

    useLayoutEffect(() => {  
        // smooth scroll on next page render
        if(cast) {
          window.scrollBy({
            top: (window.innerHeight / 2),
            behavior: 'smooth',
          });
        } 
      },[cast]);

    return (
        <CastList>
            {cast.map(({name, character, profile_path, cast_id}) => {
                return (
                    <li key = {cast_id}>
                        <CastItem name={name} character={character} profile_path={profile_path}/>
                    </li>
                )
            })}
        </CastList>
    )
}