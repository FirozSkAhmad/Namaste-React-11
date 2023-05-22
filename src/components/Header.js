import { ICON_LOGO } from "../../utils/constants"
import { Link } from 'react-router-dom'
import useIsOnline from "../../utils/useIsOnline"
import { useContext } from "react"
import UserContext from "../../utils/UserContext"
import { useSelector } from 'react-redux'
// import logImg from '../../utils/images.jpeg'

const Header = () => {

    const isOnline = useIsOnline()

    const { user } = useContext(UserContext)

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between items-center border-2 border-balck bg-pink-100 shadow-md text-lg font-medium">
                <img  data-testid='logo' className="w-24 m-3 rounded-3xl" alt="app-log" src={ICON_LOGO}></img>
            <div >
                <ul className="flex gap-5">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart' data-testid='cart'>Cart-{cartItems.length}</Link></li>
                    <li><Link to='/instamart'>InstaMart</Link></li>
                </ul>
            </div>
            <h1 className="text-lg font-medium text-red-800">{user.name}</h1>
            <div className="mr-2" data-testid='online'>
                {(isOnline) ? <h2>🟢</h2> : <h2>🔴</h2>}
            </div>
        </div>
    )
}

export default Header