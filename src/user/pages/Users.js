import React from 'react';
import {UsersList} from '../components/UsersList' 

export const Users = () =>{
    const USERS = [
        {
            id: 'u',
            name: 'Prakash Kumar',
            image: 'https://ylpapp.isb.edu/user/sample_photo.html',
            places: 3
        }
    ]
    return(
        <UsersList items={USERS}/>

    )
} 