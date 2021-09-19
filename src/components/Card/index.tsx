import React from "react";

interface CardProps {
    title: string;
    imageURL: string;
    description: string;
    dateCreated: string;
    tags?: string[];
}

const Card: React.FC<CardProps> = ({title, imageURL, description}) => {
    return(
        <>
       <h1>{title}</h1>
       <img src={imageURL}></img>
       <p>{description}</p>
        </>
    )
}

export default Card;