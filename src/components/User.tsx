import React from 'react';

interface IUser{
  name: string;
  sobrenome: string;
  email: string;
}

interface Props{
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return(
    <div>
      <strong>Nome: </strong> {[user.name]} {[user.sobrenome]} <br />
      <strong>E-mail: </strong> {user.email} <br />
    </div>
  )
}

export default User;