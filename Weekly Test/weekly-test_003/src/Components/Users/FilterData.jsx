
const FilterData = ({setUser, state}) => {


  return (
    <div>
         <input type="radio" name="gender" value="All" onChange={()=>{
                    setUser(state)
                }}  />All

                <input type="radio" name="gender"  value="male" onChange={()=>{
                        setUser(state.filter((data) => data.gender === "male"));
                }} />Male

                <input type="radio" name="gender"  value="female" onChange={()=>{
                    
                    setUser(state.filter((data) => data.gender === "female"));
                }} />Female

               
    </div>
  )
}

export default FilterData