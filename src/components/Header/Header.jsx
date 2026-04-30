import './header.css'

const Header = () => {

    let menuItems = [

        {
            name: "Home",
            address: "/home"
        },
        {
            name: "About Me",
            address: "/about"
        },
        {
            name: "Certificates",
            address: "/certificates"
        },
        {
            name: "Projects",
            address: "/projects"
        }
    ]



    return (
        <header className='header'>
            {/* LOGO */}
            <h1>MUNZIR</h1>


            <ul className='menu-items'>
                {menuItems.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>

        </header>
    )
}

export default Header