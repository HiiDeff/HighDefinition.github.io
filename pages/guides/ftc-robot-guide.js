import Header from '../../components/header';
import Footer from '../../components/footer';
import {useState} from 'react';

export default function RobotGuide() {
  return (
    <>
        <h1 style={{textAlign: 'center', fontFamily: 'Roboto'}}>FIRST FTC Mechanical Guide for Beginners</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><iframe src="https://docs.google.com/document/d/e/2PACX-1vRLNs9a0Lsci9RhZMDDIceXnuECiLx7QEhnuTi7c5Dk4KmleNAkg4lp7-898Z0eQ4PASJ1ojFywM-E2/pub?embedded=true"></iframe></div>
        <br />
        <Footer />
    </>
  );
}