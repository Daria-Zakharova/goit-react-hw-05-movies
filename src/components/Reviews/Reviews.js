import { useLayoutEffect, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "utils/fetch-movies";
import { scrollToDetails } from "utils/scrollToDetails";
import { ReviewsList } from "./Reviews.styled";

const ReviewItem = ({author, content}) => {
    return (
        <>
        <p><b>Author: {author}</b></p>
        <p>{content}</p>
        </>
    )
} 

export default function Reviews () {
    const {id} = useParams(); 
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async() => {
            const reviewList = await(await(getMovieDetails({type: 'reviews', id}))).data.results;
            setReviews(reviewList);
        }
        getReviews();
    }, [id]);

    useLayoutEffect(() => {  
        scrollToDetails(reviews); 
      },[reviews]);
    
    return (
    <>        
        {!reviews.length ? (<p style={{padding: '40px 100px'}}>We don't have any reviews for this movie</p>) :
        (<ReviewsList id='reviews'>            
            {reviews.map(({author, content, id}) => { return (<li key = {id}><ReviewItem author={author} content={content}/></li>)})}
        </ReviewsList>)}
    </>
    )
}