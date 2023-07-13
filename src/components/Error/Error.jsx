import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const {error,status} = useRouteError();
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3">
                    {" "}
                    <span className="text-danger">Opps!</span> Page not found.
                    </p>
                    <p className="lead">{error.message}</p>
                    <Link to="/" className="my-btn">
                    Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;