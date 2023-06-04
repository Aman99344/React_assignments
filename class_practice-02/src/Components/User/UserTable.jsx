
const UserTable = ({user}) => {
    return(
        <table width="100%" frame="box" rules="all">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody align="center">
            {user.map((ele) => {
                return (
                    <tr>
                        <td>
                            <img
                                src={ele.picture.medium}
                                alt=""
                                width="100%"
                                height="100%"
                            />
                        </td>
                        <td>
                            {ele.name.first} {ele.name.last}
                        </td>
                        <td>{ele.gender}</td>
                        <td>{ele.email}</td>
                        <td>{ele.location.city}</td>
                    </tr>
                );
            })}
        </tbody>
        </table>
    )
}

export default UserTable;

