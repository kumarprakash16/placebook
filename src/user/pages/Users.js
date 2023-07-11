import React from 'react';
import {UsersList} from '../components/UsersList' 

export const Users = () =>{
    const USERS = [
        {
            id: 'u',
            name: 'Prakash Kumar',
            image: 'https://www.pngitem.com/pimgs/m/264-2640465_passport-size-photo-sample-hd-png-download.png',
            places: 3
        }
    ]
    return(
        <UsersList items={USERS}/>

    )
} 