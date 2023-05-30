 import {useState} from 'react'
 
 const User = () => {

    const [state, setState] = useState([])

    const getData = () =>{
        fetch("https://randomuser.me/api/?results=30")
        .then((res) => res.json())
        .then((data) => {
            setState(data.results)
            console.log(data)
        })
    } 
   return (
     <div>
        <h2>User Details</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aut, saepe quisquam, quibusdam, alias consectetur quae rem omnis asperiores consequatur harum accusantium optio ipsam laudantium ex voluptates voluptatem. Eligendi voluptates libero, suscipit tempore nihil minus est rerum nobis soluta amet. Veniam provident ipsa inventore aut temporibus beatae eligendi, facere ipsam ad? Aspernatur facilis ex vel incidunt, doloribus nam velit atque suscipit iusto illo animi. Sequi itaque saepe assumenda iusto nobis sunt quos nesciunt, libero ipsam nostrum molestias pariatur temporibus beatae laborum sed explicabo maiores reiciendis a atque dolore fugit voluptatem veniam. Sint, quisquam. Eaque delectus voluptatibus cumque, deserunt exercitationem ducimus accusantium ab in animi qui quam similique deleniti laborum aperiam inventore non rerum quis maxime quod distinctio ipsum excepturi? Enim sapiente facere nemo iure eum tenetur, quas iste quaerat praesentium sed ad deserunt nam explicabo dolorem illo impedit maxime qui incidunt ipsa provident facilis sunt eveniet voluptatum eligendi? Maxime, omnis.</p>
        <button onClick={getData}>Get Data</button>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
                <tbody>
                    {
                        state.map((e) =>{
                         return(
                            <tr>
                                <td>{e.email}</td>
                            </tr>
                         )
                        })
                    }
                </tbody>
            </thead>
        </table>
     </div>

     
   )
 }
 
 export default User;