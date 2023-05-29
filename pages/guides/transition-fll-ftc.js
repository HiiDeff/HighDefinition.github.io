import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import Top from "../../components/top";

export default function FLLUltimateGuide() {
  return (
    <>
      <Top name="FIRST Transition from FLL to FTC" />
      <h1 style={{ textAlign: "center", fontFamily: "Roboto" }}>
        FIRST Transition from FLL to FTC
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ_qEqznNTbcCEhw8d7rmdov7lq-YDDUexSVABUATCmkuGTI5Y0RbDjbroJKg1cABx5uA_yUGb4or-E/pub?embedded=true"></iframe>
      </div>
      <br />
      <Footer />
    </>
  );
}
