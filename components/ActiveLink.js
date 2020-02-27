import { withRouter } from 'next/router'
// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

function ActiveLink({ children, router, href, id }) {

    const style = {
        boxShadow: router.pathname === href ? 'inset 0 -9px 0px white' : '',
        color: router.pathname === href ? 'white' : '#D0D0D0',
    }

    const handleClick = e => {
        e.preventDefault()
        router.push(href);
    }

    return (
        <a id={id} className="nav__link gg-u-text-whisper" href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export default withRouter(ActiveLink)
