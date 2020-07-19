import React from "react";

function Table(props) {
    return (
        <div className="container">
            <table className="table table-bordered table-dark shadow">
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col"><button className="badge badge-primary" name="firstName" onClick={props.sortColumn}>First Name</button></th>
                        <th scope="col"><button className="badge badge-primary" name="lastName" onClick={props.sortColumn}>Last Name</button></th>
                        <th scope="col"><button className="badge badge-primary" name="email" onClick={props.sortColumn}>E-mail</button></th>
                        <th scope="col"><button className="badge badge-primary" name="location" onClick={props.sortColumn}>Location</button></th>

                    </tr>
                </thead>
                <tbody>



                    {props.results.map(result => (
                        <tr key={result.login.uuid}>
                            <td><img alt="employee" src={result.picture.thumbnail}></img></td>
                            <td>{result.name.firstName}</td>
                            <td>{result.name.lastName}</td>
                            <td>{result.email}</td>
                            <td>{result.location.country}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Table;