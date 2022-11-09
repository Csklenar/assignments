import React from "react";


export default function Home() {
    return (
        <div className="home-wrapper">
            <h1 className="home-header">Welcome!</h1>
            <p className="home-description">This website was created for users to learn interesting facts about zoo animals.</p>
            <p className="home-description">User's will see an image of a zoo animal and will be able to read facts about that animal.</p>
            <br/>
            <h2 className="home-h2-example">Example</h2>
            
            <div className="home-main">
            <img src="https://bit.ly/3DiHgWj" className="home-example-image"/>
                <ul className="home-list">
                    <li>Name:<span className="home-list-span">Lion</span></li>
                    <li>Latin Name:<span className="home-list-span">Panthera leo</span></li>
                    <li>Animal Type:<span className="home-list-span">Mammal</span></li>
                    <li>Active Time:<span className="home-list-span">Nocturnal</span></li>
                    <li>Min Length:<span className="home-list-span">6ft</span></li>
                    <li>Max Length:<span className="home-list-span">10ft</span></li>
                    <li>Min Weight:<span className="home-list-span">330Ibs</span></li>
                    <li>Max Weight:<span className="home-list-span">550Ibs</span></li>
                    <li>Lifespan:<span className="home-list-span">8-10 years</span></li>
                    <li>Habitat:<span className="home-list-span">Open plains to thick brush and dry thorn forest</span></li>
                    <li>Diet:<span className="home-list-span">Buffalo, Zebra, Giraffes, Antelopes, Hippos, Warthogs, Crocodiles, young Elephants</span></li>
                    <li>Geo Range:<span className="home-list-span"> Gir Forests of India, some sub-Saharan African countires</span></li>
                </ul>
            </div>
            </div>
            )
        }
                    
                    
          

       
            
            

            
            