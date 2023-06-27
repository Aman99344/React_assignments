import { useRef } from 'react'

const SelectUseRef = () => {
    const h2Ref = useRef(null)


    const handleSizeChange =(e)=>{
      h2Ref.current.style.fontSize = e.target.value;
    }

    const handleColorChange =(e) =>{
        h2Ref.current.style.color = e.target.value;
    }


    return (
        <div>
            <select onChange={handleSizeChange} >
                <option >Select Size</option>
                <option value="10px">10</option>
                <option value="20px">20</option>
                <option value="30px">30</option>
                <option value="40px">40</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;

            <select onChange={handleColorChange}>
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>

            <h2 ref={h2Ref}>Change size and Color using Use ref</h2>

        </div>
    )
}

export default SelectUseRef