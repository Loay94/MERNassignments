import React from 'react';
import List from './List';
import { Router,Link } from '@reach/router';

import AddPlayer from './AddPlayer';
const ManagePlayers = () => {
    return (
        <div>
            <h3><Link to="/list">List</Link> | <Link to="/addplayer">Add Player </Link> </h3>
            <Router>
                <List path="/palyer/list" />
                <AddPlayer path="/palyer/addplayer" />
            </Router>
        </div>
    )
}

export default ManagePlayers
