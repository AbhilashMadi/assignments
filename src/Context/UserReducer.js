import React from 'react'

function UserReducer(state,action) {
  const {type,payload} = action;

  switch(type){
    case 'ADD_USER':
        return [...state,{id: payload.id ,userMail: payload.userMail,userType: payload.userType}];
    
    case 'REMOVE_USER':
        return state.filter((user) => {
            return user.id !== payload.id
        })
    
    default:
        return state;
    }
}

export default UserReducer;