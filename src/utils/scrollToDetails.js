export const scrollToDetails = (detailType) => {
    const detailsStart = document.querySelector('.details-title').getBoundingClientRect().top;
        if(detailType ) {
          window.scrollBy({
            top: detailsStart,
            behavior: 'smooth',
          });
        } 
}