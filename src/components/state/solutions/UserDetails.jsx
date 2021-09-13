import { useState } from "react";

function UserDetails() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
    return ( 
        <form>
            <label>Username
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
            </label>
            <label>Password
            <input type="password" name="pass" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>
        </form>
     );
}

export default UserDetails;