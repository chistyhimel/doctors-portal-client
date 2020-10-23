import React from 'react';
import NavBar from '../NavBar/NavBar';
import Blogs from './Blogs';
import ContactForm from './ContactForm';
import Doctors from './Doctors';
import ExceptionalService from './ExceptionalService';
import Footer from './Footer';
import Header from './Header';
import MakeAppointment from './MakeAppointment';
import PortalInfo from './PortalInfo';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <Header></Header>
            <PortalInfo></PortalInfo>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;