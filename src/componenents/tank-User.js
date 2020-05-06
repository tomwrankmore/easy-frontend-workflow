import axios from 'axios';

const template = (user) => `
    <div class="card">
        <img src="${user.picture.large}" />
        <div class="card-body">
            <h1>${user.name.first} ${user.name.last}</h1>
            <ul>
                <li>${user.email}</li>
                <li>${user.phone}</li>
                <li>${user.location.city}</li>
            </ul>
        </div>
    </div>
`

const User = async (passedUser = void 0) => {
    if (passedUser) return template(passedUser);

    //Just to make sure it returns something:
    const randomUserResponse = await axios.get('https://randomuser.me/api');
    const user = passedUser || randomUserResponse.data.results[0];

    return template(user)
}

export default User;