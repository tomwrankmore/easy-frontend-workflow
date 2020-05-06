import Header from './componenents/Header'
import Users from './componenents/Users'

async function getUsersHTML() {
    const TwentyTwoUsers = await Users(22);

    return TwentyTwoUsers.join();
}


async function App() {
    const template = document.createElement('template')

    template.innerHTML = `
        <div class='container'>
            ${Header()}
            ${await getUsersHTML()}
        </div>
    `

    //Return a new node from template
    return template.content.cloneNode(true)
}

export default App;