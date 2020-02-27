import Head from 'next/head';
import React, { useState } from 'react';

function Index() {
    const [open, setOpen] = useState(false);
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
            <nav className={"nav1 " + (open ? "nav--open" : "")}>
                <ul>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Account</a></li>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Profile and settings</a></li>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Payments</a></li>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Loan</a></li>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Security</a></li>
                    <li><a className="nav__link gg-u-text-whisper" href="#">Setup wizard</a></li>
                    {open && <button className="gg-u-text-whisper" onClick={() => setOpen(false)}>Less <svg className="gg-u-icon gg-u-icon--small" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>aArtboard 1</title><path d="M4.49,16.81c1.3-1.2,2.1-2.3,3.4-3.5a3.64,3.64,0,0,0,.7-.6c.7-.7,1.2-1.1,1.8-1.8L12,9.31l.6.6c2.1,2.4,4.7,4.4,7,6.7a.49.49,0,0,0,.68,0l0,0a7.69,7.69,0,0,0,1.8-1.8c.1-.2,0-.3-.1-.5v-.1c-.2-.6-1-1.1-1.5-1.6-1.3-1.3-2.7-2.6-4.1-4s-2.5-2.7-3.9-3.9l-.1-.1a.49.49,0,0,0-.68,0l0,0c-1.6,1.6-3.4,3.1-5,4.7s-3.1,3.3-4.7,4.9a.49.49,0,0,0,0,.68l0,0,1.9,1.9C4,17,4.29,17,4.49,16.81Z" /></svg></button>}
                </ul>
                {!open && <button className="gg-u-text-whisper" onClick={() => setOpen(true)}>More <svg className="gg-u-icon gg-u-icon--small" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>aArtboard 1</title><path d="M19.51,6.85c-1.3,1.2-2.1,2.3-3.4,3.5a3.64,3.64,0,0,0-.7.6c-.7.7-1.2,1.1-1.8,1.8L12,14.35l-.6-.6c-2.1-2.4-4.7-4.4-7-6.7a.49.49,0,0,0-.68,0l0,0a7.69,7.69,0,0,0-1.8,1.8c-.1.2,0,.3.1.5v.1c.2.6,1,1.1,1.5,1.6,1.3,1.3,2.7,2.6,4.1,4s2.5,2.7,3.9,3.9l.1.1a.49.49,0,0,0,.68,0l0,0c1.6-1.6,3.4-3.1,5-4.7s3.1-3.3,4.7-4.9a.49.49,0,0,0,0-.68l0,0-1.9-1.9C20,6.65,19.71,6.65,19.51,6.85Z" /></svg></button>}
            </nav>

            <div className="gg-o-page-section">
                <h1 className="gg-u-text-megaphone gg-u-mt-medium">Nav 1</h1>
            </div>
        </div>
    )
}
export default Index;