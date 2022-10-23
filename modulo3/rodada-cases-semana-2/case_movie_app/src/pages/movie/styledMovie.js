import styled from "styled-components";

export const MovieCardS = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 2rem auto;
`
export const Trailer = styled.div`
    min-height: 400px;
    max-width: max-content;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    margin: 0;
`
export const TrailerTitle = styled.h2`
    font-size: 3rem;
    margin: 0;
`
export const Content = styled.div`
    max-width: 70%;
    padding-bottom: 3rem;
    margin-left: 1rem ;
`

export const Button = styled.button`
    background-color: #0F1014;
    color: white;
    outline: none;
    border: 1px solid white;
    padding: 0.5rem 0.5rem;
`

/* .moviePage {
    color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 2rem auto;
}


.moviePage svg {
    font-size: 1.5rem;
    color: #f7d354;
}

 .moviePage .movieCard {
    text-align: center;
}

.moviePage .movieCard img, 
.moviePage .movieCard h2,
.moviePage .movieCard p {
    margin-bottom: 1rem;
}
 
.moviePage .movieCard h2 {
    font-size: 2rem;
}

.moviePage .movieCard p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
} 

.tagline {
    text-align: 1.3rem;
    margin-bottom: 2rem;
}

.info {
    margin-bottom: 1.5rem;
}

.info h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.description{
    padding-bottom: 10rem;
}

.description p { 
    line-height: 1.4rem;
}
 */