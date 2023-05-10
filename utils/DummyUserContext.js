const { createContext } = require("react");

const DummyUserContext = createContext({
    userD: {
        name: "dummy2 name",
        email: "dummy2@gmail.com"
    }
})

DummyUserContext.displayName="DummyUserContext"

export default DummyUserContext