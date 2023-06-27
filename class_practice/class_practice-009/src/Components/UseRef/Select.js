
import {useState} from 'react'

const Select = () => {

    const[selectsize, setSelectSize] = useState("")
    const[selectcolor, setSelectColor] = useState("")

    const handleSizeChange = (event) =>{
        setSelectSize(event.target.value)
    }

    const handleColorChange = (event)=>{
        setSelectColor(event.target.value)
    }


  return (
    <div>
        <h2>Select options</h2>
         <div>
            <select value={selectsize} onChange={handleSizeChange} >
                <option >Select Size</option>
                <option value="10px">10</option>
                <option value="20px">20</option>
                <option value="30px">30</option>
                <option value="40px">40</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;

            <select value={selectcolor} onChange={handleColorChange}>
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>

            <p style={{fontSize: selectsize, color: selectcolor}}>React is Easy to Learn</p>
         </div>
    </div>
  )
}

export default Select