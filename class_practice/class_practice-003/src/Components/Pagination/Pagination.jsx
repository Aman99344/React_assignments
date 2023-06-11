import {useState, useEffect} from 'react';
import axios from 'axios';


const Pagination = () => {
 const[state, setState] = useState([]);
 const[page, setPage] = useState(1);

 useEffect(()=>{
      axios.get(`http://localhost:5001/results?_limit=${4}&_page=${page}`).then((res)=>{
          setState(res.data)
          console.log(res.data)
      })
 },[page])

  return (
    <div>
        <h2>Pagination</h2>
        <p>Lorem ipsum dolo nulla accusantium officies magni labore nam voluptatem, tempore deleniti, odit veritatis. Alias veniam voluptatum quam rerum voluptate id nulla, iure amet odit eum nostrum autem in quae, libero velit exercitationem. Velit natus, laboriosam labore delectus possimus sit! Eveniet blanditiis molestias dolorum, rem, deleniti praesentium sapiente aliquam saepe, nisi beatae ad id. Laudantium, inventore nemo. Voluptatem, nam velit doloribus quaerat distinctio maiores, commodi placeat similique, iure optio nobis! Nemo veritatis velit ab quos inventore excepturi fugit minus consectetur, ullam maxime libero obcaecati culpa consequatur voluptate quisquam. Fuga at ullam sed labore, voluptatem ipsum. Officiis, alias enim. Delectus commodi ratione beatae tenetur vero? Beatae provident, voluptatibus nulla tenetur non velit sit voluptatem alias, quisquam natus quae nostrum. Ut consequatur quod libero aut sapiente quae consequuntur harum, id perferendis, fugiat odit quibusdam at sunt beatae tenetur distinctio accusantium error fuga animi deserunt quam doloremque voluptate? Nam, eligendi. Eveniet iste magni a amet nesciunt harum ut consectetur eligendi! Eius quae atque rem accusantium beatae vero placeat optio, voluptatem omnis architecto porro itaque quidem. Vitae, blanditiis ullam delectus quidem possimus qui? Praesentium exercitationem id suscipit ratione, hic nam ab nemo. Quas vero, blanditiis iste autem illum explicabo corrupti sapiente temporibus voluptate, est quam nobis, dolores qui dicta repellendus natus ad! Magnam eligendi, rerum consequatur quae praesentium cupiditate! Aliquid minima blanditiis incidunt nobis beatae unde laudantium repudiandae totam rem et quidem officia magni nesciunt, dolore, cumque odio voluptas? Dolores adipisci, consequuntur dicta optio delectus porro quidem similique fuga necessitatibus sapiente inventore illum molestias rerum enim reprehenderit, facilis error! Recusandae error assumenda, maxime ipsa debitis dolore asperiores totam perferendis sapiente odit id, accusantium vel modi! Officiis in quaerat nisi accusamus quam tempore ullam rerum quod numquam? Corrupti, obcaecati.</p>
        
        <table frame = ""  align='center'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                   state.map((ele)=>{
                   return  <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.gender}</td>
                      </tr>
                   })
                }
            </tbody>
        </table>
      <div style={{marginTop: "20px"}}>

      <button disabled={page === 1} onClick={()=>{
            setPage(page - 1)
        }}>prv</button>
        <span>{page}</span>
        <button disabled={page === 5} onClick={()=>{
            setPage(page + 1)
        }}>next</button>

      </div>
        
    </div>
  )
}

export default Pagination;