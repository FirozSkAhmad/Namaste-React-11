import React from "react"
import MyselfF from "./MyselfF"
import UserContext from "../../utils/UserContext"

class About extends React.Component {
    render() {
        return (
            <>
                <h1>I'm About Page</h1>
                <MyselfF />

                <h2 className="text-lg font-medium">Using Context in CBC</h2>
                <UserContext.Consumer>
                    {(value)=><>
                    <h2>name:-{value.user.name}</h2>
                    <h3>email:-{value.user.email}</h3>
                    </>}
                </UserContext.Consumer>
            </>
        )
    }
}

export default About