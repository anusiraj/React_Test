import React from 'react';
import Button from './ButtonComponent';


const Card = (props) => {
    return(

        <div class="container">
            <div className='row'>
                <div classname = 'col-12 col-md-5 m-1'>
                    <div className='card'>
                        <div className='card_body'>
                            <div className='circle'>{props.circle}</div>
                            <h5 className='card_title'>{props.title}</h5> 
                            <p className='card_subtitle'>{props.subtitle}</p>
                            <p className='card_description'>
                                <a href="https://reactjs.org/docs/create-a-new-react-app.html">{props.description}</a>
                            </p>
                            <Button onClick={() => props.onClick()}/>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>  

    );
}

export default Card;

