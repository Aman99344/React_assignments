
import {useState} from 'react'
import { UserData } from '../API/API';
import UserTable from './UserTable';
import FilterData from './FilterData';



const User = () => {
    const [user, setUser] = useState([])
    const [state, setState] = useState([])
    return (
        <div style={{margin: "20px 50px 10px"}} >
            <h2>User Detials</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia alias eaque a itaque, perferendis, sapiente accusamus nostrum quisquam quasi aut eos
                culpa optio iure suscipit adipisci recusandae corrupti voluptatem aspernatur laboriosam vero odio reiciendis distinctio nihil? Est rerum a voluptatem cum
                recusandae. Laudantium possimus dignissimos consequatur suscipit tempore, quisquam nihil esse accusamus voluptas qui. Expedita, quia obcaecati quae eum
                magni, sed odio minus reprehenderit in unde quod dolorem ipsum. Assumenda, provident similique. Repellendus cumque consequatur qui voluptates veniam
                iste!</p>

               <FilterData setUser={setUser} state={state} />
                <UserData setUser={setUser} setState={setState} />
                <UserTable user={user} />
        </div>
    )
}

export default User;