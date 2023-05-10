import { useContext } from 'react'
import UserContext from "../../utils/UserContext"
import DummyUserContext from '../../utils/DummyUserContext'

const Footer = () => {
    const { userD } = useContext(DummyUserContext)
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1 className="text-lg font-medium">Footer</h1>
            <h2>This App is developed by {user.name}-{user.email}</h2>
            <h2>This App is developed by {userD.name}-{userD.email}</h2>
        </div>
    )
}

export default Footer