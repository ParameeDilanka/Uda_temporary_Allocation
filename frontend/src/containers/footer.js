import React from "react";
import Footer from '../components/footer'
import Icons from "../components/icons";

export function FooterContainer() {

    return(
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>UDA</Footer.Title>
                    <Footer.Link href="#"> 6th , 7th and 9th Floors, "Sethsiripaya",
      Battaramulla. Sri Lanka</Footer.Link>
                    <Footer.Link href="#">+94 112 873 637</Footer.Link>
                    <Footer.Link href="#">info@uda.gov.lk</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">+94 112 875 918 / +94 112 875 919</Footer.Link>
                    <Footer.Link href="#">+94 112 875 920 / +94 112 873 644</Footer.Link>
                    <Footer.Link href="#">+94 112 873 647 / +94 112 873 649</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Follow Us on</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/pages/category/Gym-Physical-Fitness-Center/C4-Fitness-115081520336583/"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/c4fitness/?hl=en"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/"><Icons className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://twitter.com/?lang=enhttps://twitter.com/?lang=en"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )

}