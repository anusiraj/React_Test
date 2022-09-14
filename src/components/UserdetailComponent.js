import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function Userdetail() {
    let params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const userDetailsUrl = "https://jsonplaceholder.typicode.com/users/"+params.id;
            console.log('*******userDetailsUrl*********', userDetailsUrl);
            const response = await fetch(
                userDetailsUrl
            );
            const data = await response.json();
            console.log('******data******* ', data);
            setUser(data);
        }
        const user = fetchUserDetails();
    }, []);

    if(user !== null) {
        return(
            <div className='container' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <div className='row'>
                    <div className='userdetailboarder'>
                        <div>-name: {user.name}</div>   

                        <div>-username: {user.username}</div>

                        <div>-email: {user.email}</div>

                        <div>-phone: {user.phone}</div>

                        <div>-company: {user.company.name}</div>

                        <div>-website: {user.website}</div>

                        <div>-address: 
                            <li>street: {user.address.street}</li>
                            <li>suite: {user.address.suite}</li>
                            <li>city: {user.address.city}</li>
                            <li>zipcode: {user.address.zipcode}</li>     
                        </div>

                    </div> 
                </div>
                   
            </div>
           
            
    
        );
    } else {
        return <div></div>
    }
}
export default Userdetail;