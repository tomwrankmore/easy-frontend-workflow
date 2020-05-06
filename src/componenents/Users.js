import axios from 'axios';
import User from './tank-User';

const Users = async (amount = 500) => {
    const randomUsersResponse = await axios.get(`https://randomuser.me/api?results=${amount}`)
    console.log(randomUsersResponse)
    const users = randomUsersResponse.data.results;

    const templatedUsers = [];
    for await (const U of users) {
        const templatedUser = await User(U);
        templatedUsers.push(templatedUser)
    }

    return templatedUsers

}

export default Users;