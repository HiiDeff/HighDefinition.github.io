import Script from 'next/script';
import Head from 'next/head';

export default function Top({name}) {
    return (
        <Head>
            <title>High Definition | {name}</title>
            <meta name="description" content="FIRST Tech Challenge Team 18225, High Definition, is a team of 14 enthusiastic students with a passion for STEAM and robotics. Our goal is to inspire students to participate in FIRST competitions to kickstart their STEM journies."/>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QCB5JEYRBH"></Script>
            <Script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QCB5JEYRBH');
            `}}></Script>

            <link rel="icon" href="/logo.png" />    
        </Head>
    );
}