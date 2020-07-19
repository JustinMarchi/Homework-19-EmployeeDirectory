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
                        <th scope="col"><button className="badge badge-primary" name="city" onClick={props.sortColumn}>City</button></th>
                        <th scope="col"><button className="badge badge-primary" name="state" onClick={props.sortColumn}>State</button></th>
                        <th scope="col"><button className="badge badge-primary" name="country" onClick={props.sortColumn}>Country</button></th>

                    </tr>
                </thead>
                <tbody>



                    {props.results.map(result => (
                        <tr key={result.login.uuid}>
                            <td><img alt="employee" src={result.picture.thumbnail}></img></td>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                            <td>{result.email}</td>
                            <td>{result.location.city}</td>
                            <td>{result.location.state}</td>
                            <td>{result.location.country}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Table;