import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {

    return (
<div class="footer">
    <div class="row">
            <Link to="#"><i class="fa fa-facebook"></i></Link>
            <Link to="#"><i class="fa fa-instagram"></i></Link>
            <Link to="#"><i class="fa fa-youtube"></i></Link>
            <Link to="#"><i class="fa fa-twitter"></i></Link>
        </div>

        <div class="row">
        <ul>
            <li><Link to="/about">O nas</Link></li>
            <li><Link to="/find-camper">Znajdź campera</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/insurance">Ubezpieczenia</Link></li>
            <li><Link to="#">Regulamin</Link></li>
        </ul>
        </div>

        <div class="row">
        Copyright © 2022 CampRide. All rights reserved || Designed By: Returny
    </div>
</div>

    )
}