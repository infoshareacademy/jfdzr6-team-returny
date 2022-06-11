import React from "react";
import "./CamperCard.css"


const CamperCard = () => {
        return(

       
        <div className="wrapper">
        <FindCmpr></FindCmpr>
        
        <Card
        img="https://i.ibb.co/8jkVd0x/2.jpg"
        title="Camper nr 1"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/PrHYrv0/3.jpg"
        title="Camper nr 2"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/xLNMf4M/4.jpg"
        title="Camper nr 3"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/GQxmGHd/5.jpg"
        title="Camper nr 4"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/Tbfp7xL/6.jpg"
        title="Camper nr 5"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/vXMDz7X/7.jpg"
        title="Camper nr 6"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/VJpBf76/8.jpg"
        title="Camper nr 7"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/9Z0xTyg/9.jpg"
        title="Camper nr 8"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/Nm2X4Sv/10.jpg"
        title="Camper nr 9"
        description="Camper jakiśtam" />    
        <Card
        img="https://i.ibb.co/ZYJKv2L/11.jpg"
        title="Camper nr 10"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/PrHYrv0/3.jpg"
        title="Camper nr 11"
        description="Camper jakiśtam" />
        <Card
        img="https://i.ibb.co/JsCKv8M/12.jpg"
        title="Camper nr 12"
        description="Camper jakiśtam" />

        </div>

        )
}

function Card(props){
    return(
        <div className="card">
            <div className="card__body">
                <img src={props.img} class="card__image" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">Zobacz campera</button>
        </div>
    )

}


function FindCmpr(){
    return(

<div classNAme="find">
    <h2 className="find__title">Znajdź campera</h2>
    <p class="find_desc">Wybierz z listy: </p>
        <div class="select">
            <select id="cars" name="cars">
                <option value="campervan">Campervan</option>
                <option value="integra">Integra</option>
                <option value="półintegra">Półintegra</option>
                <option value="alkowa">Alkowa</option>
            
            </select>
        <div class="select_arrow">
        </div>
        </div>
</div>
    )
}

export default CamperCard;