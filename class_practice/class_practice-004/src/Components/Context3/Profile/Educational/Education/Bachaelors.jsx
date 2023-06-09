import React from 'react'
import { useContext } from 'react'
import myThirdContext from '../../Context3'

const Bachaelors = () => {

    let myDegreeData = useContext(myThirdContext)
  return (
    <div>
       <table style={{width: "180px"}} frame="box" rules= "all" align='center'>
            {
                myDegreeData.map((ele)=>{
                 return <tr>
                    <td>{ele.degree}</td>
                    <td>{ele.Percentage}</td>
                 </tr>
                })
            }
       </table>
    </div>
  )
}

export default Bachaelors