import { useContext, useState } from "react"
import UserContext from "../../utils/UserContext"

const Section = ({ title, description, isVisible, setIsVisible, id }) => {

    return (
        <div className="border-2 border-black p-2 m-4">
            <h1 className="text-lg font-medium">{title}</h1>
            <button onClick={() => isVisible ? setIsVisible("") : setIsVisible(id)} className="underline">{isVisible ? "Hide" : "show"}</button>
            {isVisible && <h3>{description}</h3>}
        </div>
    )
} 


const InstaMart = () => {

    const [visibleSection, setVisibleSection] = useState("")

    const {user}=useContext(UserContext)

    return (
        <>
            <h1 className="text-lg font-medium">InstaMart</h1>
            <h1 className="text-lg font-medium">Developer name:-{user.name}</h1>
            <Section id="about" title={'About InstaMart'} isVisible={visibleSection === 'about'} setIsVisible={(str) => setVisibleSection(str)} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            <Section id='contact' title={'Contact InstaMart'} isVisible={visibleSection === 'contact'} setIsVisible={(str) => setVisibleSection(str)} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            <Section id='careers' title={'Careers InstaMart'} isVisible={visibleSection === 'careers'} setIsVisible={(str) => setVisibleSection(str)} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
        </>
    )
}

export default InstaMart