import React from "react";
import { gql, useQuery } from "@apollo/client";
import { contains } from "min-document";
import styled from "styled-components";
import Movie from "../component/Movie";
import { useMutation } from "@apollo/client";

const GET_MOVIES = gql`
    query {
        movies(limit:20) {
            id
            title
            medium_cover_image
        }
    }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 40px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;


export default() => {
    const { loading , error , data } = useQuery(GET_MOVIES);

    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>Error :(</p>;

    return (
        <Container>
            <Header>
                <Title>Apollo movie App</Title>
                <Subtitle>I like GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            <Movies>
                {data?.movies?.map((movie, index) => 
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    bg={movie.medium_cover_image}
                    isLiked={movie.isLiked}
                    >
                </Movie>
                )}
            </Movies>
        </Container>
    );
}
