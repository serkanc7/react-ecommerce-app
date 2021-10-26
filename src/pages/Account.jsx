import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Account = () => {
    const auth = useSelector(state => state.auth);

    if (!auth.authenticate) {
        return <Redirect to="/register" />
    }

    return (
        <div>
            Account
        </div>
    )
}

export default Account
