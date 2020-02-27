// import App from 'next/app'
// import NavContext from '../components/NavContext';

function MyApp({ Component, pageProps }) {
    // const [open, setOpen] = useState(false);

    return (
        // <NavContext.Provider value={{ open: open, setOpen: setOpen }} >
        <Component {...pageProps} />
        // </NavContext.Provider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
