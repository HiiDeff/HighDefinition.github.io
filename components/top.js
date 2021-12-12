import Script from 'next/script';
import Head from 'next/head';

export default function Top({name}) {
    return (
        <Head>
            <title>High Definition | {name}</title>
            <meta name="description" content="FIRST Tech Challenge Team 18225, High Definition, is a team of 14 enthusiastic students with a passion for STEAM and robotics. Our goal is to inspire students to participate in FIRST competitions to kickstart their STEM journies."/>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"/>
            
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QCB5JEYRBH"></script>
            <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QCB5JEYRBH');
            `}}></script>

            <link rel="icon" href="/logo.png" />    
        </Head>
    );
}