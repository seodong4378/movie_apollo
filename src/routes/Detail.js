import React from "react";
import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";


const GET_MOVIES = gql`
    query getMovie($id: Int){
        movie(id: $id){
            title
            genres
            summary
            rating
            language
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-450deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`
const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  width: 40%;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center, center;
`;

export default() => {
    const { id } = useParams();
    const { loading , data, error } = useQuery(GET_MOVIES, {variables: {id: parseInt(id)}});

    console.log(loading, data?.movie?.title);

    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>Error :(</p>;

    return (
      <Container>
        <Column>
          <Title>
            {loading ? "Loading..." : data.movie.title}
          </Title>
          <Subtitle>{data?.movie?.language} {data?.movie?.rating}</Subtitle>
          <Description>{data?.movie?.summary}</Description>
        </Column>
        <Poster bg={data?.movie?.medium_cover_image}></Poster>
      </Container>
    )
}