import Header from '../../components/header';
import Footer from '../../components/footer';
import {useState} from 'react';
import Top from '../../components/top';

export default function FLLUltimateGuide() {
  return (
    <>
      <Top name="FIRST FLL Ultimate Guide" />
      <h1 style={{textAlign: 'center', fontFamily: 'Roboto'}}>FIRST FLL Ultimate Guide</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><iframe src="https://docs.google.com/document/d/e/2PACX-1vQMlQmtxOb-rmAi8X5MYmAYK8iNklq7MH_kWE4AjrNFd2NuXZuLaorJ-ekysL6xJMAG4bMAYU4WmyvQ/pub?embedded=true"></iframe></div>
      <br />
      <Footer />
    </>
  );
}