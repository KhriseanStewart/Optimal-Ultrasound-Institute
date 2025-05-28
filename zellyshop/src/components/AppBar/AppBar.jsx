import './AppBar.css'

function AppBar() {

  return (
    <>
    <section className='nav-bar'>
        <div><img src="" alt="logo" srcset="" /></div>
        <nav>
            <ul className='nav-items'>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Cart</a></li>
                <li><a href="">Profile</a></li>
            </ul>
        </nav>
        <div className='hamburger'>
            <div className='burger burger1'></div>
            <div className='burger burger1'></div>
            <div className='burger burger1'></div>
        </div>
    </section>
    </>
  )
}

export default AppBar
