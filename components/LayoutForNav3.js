import Nav3 from './Nav3';
import Head from 'next/head';

function Layout3(props) {
    return (
        <>
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
            <Nav3></Nav3>
            <main className="gg-o-page-section">
                {props.children}
            </main>

        </>
    )
}

export default Layout3;