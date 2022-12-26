import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "utils/fetch-movies";
import { ReviewsList } from "./Reviews.styled";

const ReviewItem = ({author, content}) => {
    return (
        <>
        <p><b>Author: {author}</b></p>
        <p>{content}</p>
        </>
    )
} 

export const Reviews = () => {
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
        // smooth scroll on next page render
        if(reviews) {
          window.scrollBy({
            top: (window.innerHeight / 2),
            behavior: 'smooth',
          });
        } 
      },[reviews]);
    
    return (
    <>        
        {!reviews.length ? (<p style={{paddingLeft: '100px'}}>We don't have any reviews for this movie</p>) :
        (<ReviewsList id='reviews'>            
            {reviews.map(({author, content, id}) => { return (<li key = {id}><ReviewItem author={author} content={content}/></li>)})}
        </ReviewsList>)}
    </>
    )
}