// import React from "react";
import { Header } from "../common";
import { Footer } from "../common";
import Banner from "../Banner/banner";
import { Container, Box } from '@mui/material';
import CustomerReviews from './Content/CustomerReviews';
import FeaturesSection from './Content/FeaturesSection';
import PartnersSection from './Content/PartnersSection';
import StationsSection from './Content/StationsSection';

export default function Home() {
    return (
        <div>
            <Banner />
            <Container maxWidth="lg" >
                <Box mt={4} >
                    <CustomerReviews />
                    <FeaturesSection />
                    <PartnersSection />
                    <StationsSection />
                </Box>
            </Container >
        </div>

    )
}