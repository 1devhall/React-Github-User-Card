import React from 'react'
import axios from 'axios'
import CardItems from './CardItems'

const Card = props => {
    console.log(props)
    return (
    <>
        <div>
            <image src={props.data.avatar_url} />
            <h1>{props.data.login}</h1>
            <p>{props.data.html_url}</p>
            <p>Location: {props.data.location}</p>
            <p>Following: {props.data.following}</p>
            <p>Created at: {props.data.created_at}</p>
            <h4>Followers:</h4>
             <CardItems /> 
            
        </div>
    </>)
}

export default Card;