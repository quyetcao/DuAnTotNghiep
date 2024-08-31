import React from "react";
import { Header } from "../common";
import {Footer} from "../common";
import Banner from "../Banner/banner";

export default function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    )
}