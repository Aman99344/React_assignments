import { useState } from "react";
import UserTable from "./UserTable";
import FilterUser from "./FilterUser";
import { getData } from "./API";

const User = () => {
    const [user, setUser] = useState([]);
    const [state, setState] = useState([]);

    const getUser = () =>{
        getData(setUser, setState)
    }

    return (
        <div style={{ padding: "25px" }}>
            <h2>User Details</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aut, saepe
                quisquam, quibusdam, alias consectetur quae rem omnis asperiores
                consequatur harum accusantium optio ipsam laudantium ex voluptates
                voluptatem. Eligendi voluptates libero, suscipit tempore nihil minus est
                rerum nobis soluta amet. Veniam provident ipsa inventore aut temporibus
                beatae eligendi, facere ipsam ad? Aspernatur facilis ex vel incidunt,
                doloribus nam velit atque suscipit iusto illo animi. Sequi itaque saepe
                assumenda iusto nobis sunt quos nesciunt, libero ipsam nostrum molestias
                pariatur temporibus beatae laborum sed explicabo maiores reiciendis a
                atque dolore fugit voluptatem veniam. Sint, quisquam. Eaque delectus
                voluptatibus cumque, deserunt exercitationem ducimus accusantium ab in
                animi qui quam similique deleniti laborum aperiam inventore non rerum
                quis maxime quod distinctio ipsum excepturi? Enim sapiente facere nemo
                iure eum tenetur, quas iste quaerat praesentium sed ad deserunt nam
                explicabo dolorem illo impedit maxime qui incidunt ipsa provident
                facilis sunt eveniet voluptatum eligendi? Maxime, omnis.
            </p>
            <button style={{ marginBottom: "20px" }} onClick={getUser}>
                Get Data
            </button>

            {user.length > 0 && (

               <FilterUser setUser={setUser} state={state} />
            )}

            {user.length > 0 && (
               
               <UserTable user={user} />
            )}
        </div>
    );
};

export default User;
