import React from 'react'
import { Router,Link } from '@reach/router';
import ManagePlayers from "./ManagePlayers";
import ManageStatus from "./ManageStatus";
const Main = () => {
    return (
        <div>
            <Router>
                <ManagePlayers path="/players" />
                {/* <ManageStatus path="/games" /> */}
            </Router>
        </div>
    )
}

export default Main
