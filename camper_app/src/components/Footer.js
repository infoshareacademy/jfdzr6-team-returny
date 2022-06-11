import React from "react";
import "./Footer.css"

export const Footer = () => {

    return (
<div class="footer">
    <div class="row">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
        </div>

        <div class="row">
        <ul>
            <li><a href="/about">O nas</a></li>
            <li><a href="/find-camper">Znajdź campera</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="/insurance">Ubezpieczenia</a></li>
            <li><a href="#">Regulamin</a></li>
        </ul>
        </div>

        <div class="row">
        Copyright © 2022 CampRide. All rights reserved || Designed By: Returny
    </div>
</div>

    )
}