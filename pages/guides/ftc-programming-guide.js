import Header from '../../components/header';
import Footer from '../../components/footer';
import {useState} from 'react';

export default function ProgrammingGuide() {
  return (
    <>
        <h1 style={{textAlign: 'center', fontFamily: 'Roboto'}}>FIRST FTC Programming Guide for Beginners</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><iframe src="https://docs.google.com/document/d/e/2PACX-1vQ_jsPJN8u1jY3iGCZShMn_OsissMd9OeeKYixz8ghutJpGle-9ZuXD6BOOTSo8YzHNaayc9GgpJCEN/pub?embedded=true"></iframe></div>
        <br />
        <Footer />
    </>
  );
}