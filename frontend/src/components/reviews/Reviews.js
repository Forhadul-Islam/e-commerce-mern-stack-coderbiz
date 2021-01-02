import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { reviewData } from './reviewData';

const Reviews = () => {
    const [reviews, ] = useState(reviewData);
    const [reviewCount, setReviewCount] = useState(0);
    const [reviewSliderAnimation, setReviewSliderAnimation] =useState("review__center--review-item")
    let showReview = 2;

    const reviewList = reviews.map(review =>(
        <div key={review.name} className={reviewSliderAnimation}>
                <img className="review__center--review-item-image" src={review.image} alt={review.name} />
            <div className="review__center--review-item-name">
                {review.name}
            </div>
            <div className="review__center--review-item-description">
                {review.description}
            </div>
        </div>
    ))

    let activeList = []
    showReview === 2 ? activeList = [reviewList[reviewCount], reviewList[reviewCount + 1]] :
    activeList = [reviewList[reviewCount]]

    const handleReviewSliderForward = ()=>{
        let reviewNumber = reviewList.length - 1
        if(reviewCount < reviewNumber - 1 ){
            setReviewCount(reviewCount + 1) 
        }else if(reviewCount - reviewNumber <= 2){
            setReviewCount(0)
        }    
        setReviewSliderAnimation("review__center--review-item review__slider--animation-slideOut")
        setTimeout(() => {
            setReviewSliderAnimation("review__center--review-item")
        }, 1000);
    }

    const handleReviewSliderBackward = () =>{
        let reviewNumber = reviewList.length - 1
        if(reviewCount > 0 ){
            setReviewCount(reviewCount - 1) 
        }else if(reviewCount === 0){
            setReviewCount(reviewNumber -1 )
        }    
        setReviewSliderAnimation("review__center--review-item review__slider--animation-slideIn")
        setTimeout(() => {
            setReviewSliderAnimation("review__center--review-item")
        }, 1000);
    }




    return (
        <div className="review">
            <div className="review__top">
                What Our Students Says!
            </div>
            <div className="review__center">
                {activeList}
            </div>
            <div className="review__bottom">
                <AiOutlineArrowLeft onClick={handleReviewSliderBackward} className="review__bottom--arrow" />
                <AiOutlineArrowRight onClick={handleReviewSliderForward} className="review__bottom--arrow" />
            </div>
        </div>
    )
}

export default Reviews
