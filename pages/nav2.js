import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';



function Index() {
    const [leftHighlighted, setLeftHighlighted] = useState(false);
    const [rightHighlighted, setRightHighlighted] = useState(true);
    function scrollLeft() {
        const account = document.getElementById('account');
        account.scrollIntoView({ behavior: "smooth" });
        setLeftHighlighted(false);
        setRightHighlighted(true);
    }

    function scrollRight() {
        const loan = document.getElementById('loan');
        loan.scrollIntoView({ behavior: "smooth" });
        setRightHighlighted(false);
        setLeftHighlighted(true);
    }
    const ul = useRef(null);
    const account = useRef(null);
    console.log(ul.current);
    console.log(account.current);
    useEffect(() => {


        let options = {
            root: ul.current,
            rootMargin: '0px',
            treshold: .5
        }


        function logger(entries) {
            entries.forEach(entry => {
                if (entry.isIntersection) {
                    console.log(entry.intersectionRatio)
                }
            })
        }
        let observer = new IntersectionObserver(logger, options);
        observer.observe(account.current);

    })

    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://static.giffgaff.com/design-system/style-guide/49.1.6/style-guide.css"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="/styles.css"
                    rel="stylesheet"
                />

            </Head>
            <img src="main-nav.png"></img>
            <nav className="nav2">
                <button onClick={scrollLeft} className="gg-u-pr-fine gg-u-pl-fine"> <svg style={{ fill: leftHighlighted && "white" }} className="gg-u-icon gg-u-icon--small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.34,19.47c-1.2-1.3-2.3-2.1-3.5-3.4a3.64,3.64,0,0,0-.6-.7c-.7-.7-1.1-1.2-1.8-1.8L9.84,12l.6-.6c2.4-2.1,4.4-4.7,6.7-7a.49.49,0,0,0,0-.68l0,0a7.69,7.69,0,0,0-1.8-1.8c-.2-.1-.3,0-.5.1h-.1c-.6.2-1.1,1-1.6,1.5-1.3,1.3-2.6,2.7-4,4.1s-2.7,2.5-3.9,3.9l-.1.1a.49.49,0,0,0,0,.68l0,0c1.6,1.6,3.1,3.4,4.7,5s3.3,3.1,4.9,4.7a.49.49,0,0,0,.68,0l0,0,1.9-1.9C17.54,20,17.54,19.67,17.34,19.47Z" /></svg></button>
                <ul ref={ul}>
                    <li><a id="account" ref={account} className="nav__link gg-u-text-whisper" href="#">Account</a></li>
                    <li><a id="profile" className="nav__link gg-u-text-whisper current-page" href="#">Profile and settings</a></li>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Payments</a></li>
                    <li><a id="loan" className="nav__link gg-u-text-whisper" href="#">Loan</a></li>
                    {/* <li><a id="security" className="nav__link gg-u-text-whisper" href="#">Security</a></li>
                    <li><a id="setup-wizard" className="nav__link gg-u-text-whisper" href="#">Setup wizard</a></li> */}
                </ul>
                <button onClick={scrollRight} className="gg-u-pr-fine gg-u-pl-fine">
                    <svg style={{ fill: rightHighlighted && "white" }} className="gg-u-icon gg-u-icon--small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.2 19.5c1.2-1.3 2.3-2.1 3.5-3.4.2-.3.4-.5.6-.7.7-.7 1.1-1.2 1.8-1.8l1.6-1.6-.6-.6c-2.4-2.1-4.4-4.7-6.7-7-.2-.2-.2-.5 0-.7.4-.7 1.1-1.3 1.8-1.8.2-.1.3 0 .5.1h.1c.6.2 1.1 1 1.6 1.5 1.3 1.3 2.6 2.7 4 4.1s2.7 2.5 3.9 3.9l.1.1c.2.2.2.5 0 .7-1.6 1.6-3.1 3.4-4.7 5S9.4 20.4 7.8 22c-.2.2-.5.2-.7 0l-1.9-1.9c-.2-.1-.2-.4 0-.6z" /></svg></button>
            </nav>
            <div className="gg-o-page-section">
                <h1 className="gg-u-text-megaphone">Nav Second Version</h1>
            </div>
        </div>
    )
}
export default Index;