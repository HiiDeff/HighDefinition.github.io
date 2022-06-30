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
            <div className="row banner-bar" style={{textAlign: 'center'}} id="banner1">
                <div className="col banner-left">
                    <p>Stay updated on FTC 18225 and <a style={{color: 'rgb(0, 0, 180)'}} target="_blank" href="https://forms.gle/diWqmexeMQcUMmXo7">join our subscription</a></p>
                </div>

                <div className="col banner-right">
                    <p><span className="banner-x" id="banner-x"><FontAwesomeIcon icon={faTimes} /></span></p>
                </div>
            </div>
        </div>
    );
}