import { useLayoutEffect } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseImgUrl, getMovieDetails } from "utils/fetch-movies"
import { scrollToDetails } from "utils/scrollToDetails"
import { Actor, CastList } from "./Cast.styled"
import castPlaceholder from'../../img/cast-placeholder.jpg';
import { NoDataMsg } from "components/NoDataMsg/NoDataMsg"

const CastItem = ({name, character, profile_path: imgUrl}) => {

    // const photoPlaceholderUrl = 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';
    
    return (
        <Actor>
            <img className="photo" src={imgUrl ? (baseImgUrl + imgUrl) : castPlaceholder} alt={name + " photo"}/>
            <p className="name">{name}</p>
            <p><b>Character:</b> {character}</p>
        </Actor>
    )
}

export default function Cast () {
    const {id} = useParams(); 
    const [cast, setCast] = useState([]);

    // render cast
    useEffect(()=> {
        const getCast = async() => {
            const castList = await(await(getMovieDetails({type: 'cast', id}))).data.cast;
            setCast(castList);
        }
        getCast();
    }, [id]);

    // smooth scroll on details render
    useLayoutEffect(() => {          
        scrollToDetails(cast);
      },[cast]);

    return (
        <>
            {cast.length === 0 && <NoDataMsg message = 'Sorry, the cast is unknown'/>}
        <CastList>
            {cast.map(({name, character, profile_path, cast_id}) => {
                return (
                    <li key = {cast_id}>
                        <CastItem name={name} character={character} profile_path={profile_path}/>
                    </li>
                )
            })
            }
        </CastList>
        </>
    )
}