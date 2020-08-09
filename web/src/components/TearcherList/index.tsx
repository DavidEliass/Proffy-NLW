import React from 'react';
import Whatzapp from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../services/api';



export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string
    whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherList: React.FC<TeacherItemProps> = ({ teacher }) => {
 function createConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }

    return (
        <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <strong>{teacher.subject}</strong>
          </div>
        </header>
        <p>
         {teacher.bio}
        </p>
<footer>
<p>
  Preço/hora
  <strong>R${teacher.cost}</strong>
</p>
<a onClick={createConnection} target="blank"  href={`https://wa.me/${teacher.whatsapp}`}>
  <img src={Whatzapp} alt="Whatsapp"/>
  Entrar em contato
</a>
</footer>

      </article>
   
    );
}

export default TeacherList;