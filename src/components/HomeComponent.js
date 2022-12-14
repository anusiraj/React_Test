import React, { useState, useEffect} from 'react';
import Card from './CardComponent';
import { useNavigate } from 'react-router-dom';


function Home() {

    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            console.log('******data******* ', data);
            setUsers(data);
        }
        fetchUsers();
      }, []);

    const onButtonClick = (user) => {
        console.log('Home page Button clicked ', user);
        navigate("/users/" + user.id);
    }  
    return (
        <div className='container'>
            <div className='row' style={{marginBottom: 30}} >
            {
                users.map((user) => {
                    const {name,username,website} = user;
                    const usernameat = '@'+username;
                    const firstStringChar = name.charAt(0);
                    return(
                            <div  className="col-sm">
                                <Card 
                                    circle = {firstStringChar}
                                    title = {name}
                                    subtitle = {usernameat}
                                    description = {website}
                                    onClick = {() => onButtonClick(user)}>    
                                </Card>
                            </div>
                    );
                } )
            }
            </div>
        </div>
        
    );  
     

  }
  export default Home;
