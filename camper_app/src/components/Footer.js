import React from "react";
import "./Footer.css"

const Footer = () => {

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
            <li><a href="#">O nas</a></li>
            <li><a href="#">Znajdź campera</a></li>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Ubezpieczenia</a></li>
            <li><a href="#">Regulamin</a></li>
        </ul>
        </div>

        <div class="row">
        Camper Copyright © 2022 Polska - All rights reserved || Designed By: Returny
    </div>
</div>

    )
}
export default Footer;