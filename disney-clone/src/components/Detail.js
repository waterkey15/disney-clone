import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';

function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                setMovie(doc.data());
            }else{
                console.log('no movie')
            }
        })
    }, [])


    console.log(movie);


    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt=""/>
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>  
                {movie.subTitle}
            </Subtitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;

`

const Background = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    bottom: 0;
    right:0;
    z-index: -1;
    opacity: 0.8;

    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
`


const ImageTitle = styled.div`
    margin-top: 60px;
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.button`
    display:flex;
    padding: 0;
    background-color: transparent;
    border: none;
    align-items:center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display:flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 20px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 900px;
`