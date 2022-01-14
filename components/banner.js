import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Banner() {
    useEffect(() => {
        //Local storage with banner
        if (localStorage.getItem('banner1') == null || localStorage.getItem('timeClosed') == null) {
            localStorage.setItem('banner1', 'block');
            localStorage.setItem('timeClosed', 'none');
        }

        if ((Date.now() - localStorage.getItem('timeClosed')) / 1000 >= 3600) {
            localStorage.removeItem('banner1');
            localStorage.removeItem('timeClosed');
        }

        document.getElementById("banner1").style.display = localStorage.getItem('banner1');
        document.getElementById("banner-x").addEventListener("click", function() {
            localStorage.setItem('banner1', 'none');
            document.getElementById("banner1").style.display = localStorage.getItem('banner1');
            localStorage.setItem('timeClosed', Date.now());
        });
    }, []);

    return (
        <div className="Banner">
            <div className="banner-bar" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="banner1">
                <div className="col banner-left">
                    <p>Sign up for our STEM Advocacy Training Day or Washington Tech Invitationals <Link style={{color: 'rgb(180, 0, 180)'}} target="_blank" href="/events">here!</Link></p>
                </div>

                <div className="col banner-right">
                    <span className="banner-x" id="banner-x"><FontAwesomeIcon icon={faTimes} /></span>
                </div>
            </div>
        </div>
    );
}