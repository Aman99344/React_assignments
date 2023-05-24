
const Api = ({addUser, removeUser}) => {
    return <>

    <h1 style={{ margin: "10px" }}>User Information</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur reiciendis odio sunt illum voluptates. Laudantium molestias earum ullam harum atque excepturi possimus voluptate perferendis. Esse maxime debitis voluptas blanditiis aliquid praesentium? Maxime animi deserunt eligendi sint veniam saepe labore minus esse. Ea perspiciatis non ab voluptas repellendus, repellat minima.</p><br />
      <p style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque et quisquam, ut, doloribus rerum modi, cumque obcaecati tempore reiciendis ducimus sit velit ea nesciunt dolore dicta tenetur excepturi animi itaque corporis molestiae mollitia nemo amet minima. Ducimus, provident dignissimos, distinctio, aut labore minima sequi magni totam nisi saepe repellat!</p><br />
      <button style={{ padding: "8px", marginRight: "15px"}} onClick={addUser}>User Details</button>
      <button style={{ padding: "8px" }} onClick={removeUser}>Remove User</button>

    </>
}

export default Api;