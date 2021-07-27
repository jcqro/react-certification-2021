import React from 'react';
import { items } from "../../mock/list.json";

export default function Content() {    
    return (
        <div>
            {items            
            .map((item, index) => (              
                <section key={index}>
                    {item.snippet.title} 
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.description}></img>
                </section>                           
            ))}
        </div>        
    );
}