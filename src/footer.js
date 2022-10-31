import React from "react";
import copyright from "./images/copyright.png"
import instagram from "./images/instagram (1).png"
import facebook from "./images/facebook (1).png"
import twitter from "./images/twitter.png"
import youtube from "./images/youtube (1).png"
import './footer.css'

export default function Footer() {
    return(
        <div className="footer text-center text-white">
            <div className="row fs-5 fw-bold pt-3">
                <div className="col">About Us</div>
                <div className="col">Contact Us</div>
                <div className="col">Videos</div>
                <div className="col">Social Media</div>
            </div>
            <div className="row">
                <div className="col">How it works</div>
                <div className="col">Contact</div>
                <div className="col">Submit Video </div>
                <div className="col">Instagram</div>
            </div>
            <div className="row">
                <div className="col">Testimonials</div>
                <div className="col">Support</div>
                <div className="col">Ambassadors</div>
                <div className="col">Facebook</div>
            </div>
            <div className="row">
                <div className="col">Careers</div>
                <div className="col">Destinations</div>
                <div className="col">Agency</div>
                <div className="col">Youtube</div>
            </div>
            <div className="row">
                <div className="col">Terms of Service</div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">Twitter</div>
            </div>
            <div className="row">
                <div className="col-12 gap-2">
                    <span class="footer-logo">Netflix clone</span>
                    <span class="rights">COLOR 2020. <span><img src={copyright}></img></span> All rigths reserved</span>
                    <span class="media-logo d-flex gap-3">
                        <img src={instagram} alt="" class="instagram" />
                        <img src={facebook} alt="" class="facebook" />
                        <img src={youtube} alt="" class="youtube" />
                        <img src={twitter} alt="" class="twitter" />
                    </span>
                </div>
            </div>
        </div>
    )
}