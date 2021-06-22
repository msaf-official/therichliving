import React from 'react'
import { useHistory } from "react-router-dom";

function Logout() {
    let history = useHistory();
    return (
        <div>
            {/* localStorage.clear("token");
            history.push("/"); */}
            <h1>I am logout</h1>

        </div>
    )
}

export default Logout
