import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Link from 'next/link';

export default function Error() {
  return (
    <>
      <Header title="404 Error" page="404 Error" description="Our wires have been cut short! Try going to another page." />
      
      <div className="Error">
        <div className="section">
            <Title name="Pages" />
            <p>Here are some pages you can check out:</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <ul style={{textAlign: 'left'}}>
                    <li className="tab"><Link href='/' as={ process.env.PUBLIC_URL + '/'}><a id="Home" className="tab-label">Home</a></Link></li>
                    <li className="tab"><Link href='/about' as={ process.env.PUBLIC_URL + '/about'}><a id="About" className="tab-label">About</a></Link></li>
                    <li className="tab"><Link href='/events' as={ process.env.PUBLIC_URL + '/events'}><a id="Events" className="tab-label">Events</a></Link></li>
                    <li className="tab"><Link href='/seasons' as={ process.env.PUBLIC_URL + '/seasons'}><a id="Seasons" className="tab-label">Seasons</a></Link></li>
                    <li className="tab"><Link href='/resources' as={ process.env.PUBLIC_URL + '/resources'}><a id="Resources" className="tab-label">Resources</a></Link></li>
                    <li className="tab"><Link href='/contact' as={ process.env.PUBLIC_URL + '/contact'}><a id="Contact" className="tab-label">Contact</a></Link></li>
                </ul>
            </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};