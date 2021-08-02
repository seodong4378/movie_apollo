import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
    query {
        movies(limit:20) {
            id
            title
            medium_cover_image
        }
    }
`

export default() => {
    const { loading , error , data } = useQuery(GET_MOVIES);
    console.log({data});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.movies.map((movie, index) => 
        <div key={movie.id}>
            {
                movie.title
            }
        </div>
    )
}
