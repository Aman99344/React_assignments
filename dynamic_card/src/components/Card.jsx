import React from "react";
import "./Card.css";
import { useState } from "react";

const Card = () => {

  const[style, setStyle] = useState({

    bgColor:"white",
    textColor:"black",
    labelText: "Check to switch Dark Mode"

  })

  const [user, setUser] = useState({
    name: "Ayush verma",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWT916ZIZzh7ZTuRB9cq3yVWptueIy-eKYw&usqp=CAU",
    gender: "Male",
    email: "Ayushverma@gmail.com",
  });

   const changeData = (event) => {
      if(event.target.id === "jiya"){
        setUser({
          name: "Jiya",
          img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          gender: "Female",
          email: "jiyasharma@gmail.com"
        })
      } else{
        setUser({
          name: "Ayush verma",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWT916ZIZzh7ZTuRB9cq3yVWptueIy-eKYw&usqp=CAU",
          gender: "Male",
          email: "Ayushverma@gmail.com",
        })
      }
   }

    const changeStyle = (event) =>{
      if(event.target.checked){
        setStyle({
          bgColor: "black",
          textColor: "white",
          labelText: "uncheck to switch lite Mode"
        })
      }else{

        setStyle({
          bgColor: "white",
          textColor: "black",
          labelText: "Check to switch Dark Mode"

        })
      }
    } 

   
  return (
    <div className="card">
      <div id="imageBox">
        <img
          src={user.img}
          height="100%"
          width="100%"
          alt=""
        />
      </div>


      <div id="contentBox" style={{backgroundColor: style.bgColor, color: style.textColor}}>
        <dl>
          <dt>
            <b>User name</b>
          </dt>
          <dd>{user.name}</dd>

          <dt>
            <b>Email -id </b>
          </dt>
          <dd>{user.email}</dd>

          <dt>
            <b>Gender</b>
          </dt>
          <dd>{user.gender}</dd>

          <dt>
            <b>Discription</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            veritatis esse numquam voluptas? Dignissimos eaque quibusdam,
            laudantium accusamus numquam non aperiam ipsa eveniet porro aut odio
            repellat similique alias harum sunt mollitia adipisci facere cumque
            repudiandae? Natus quas ad ipsa placeat, repellat, rem impedit
            aspernatur, pariatur vel soluta eos maiores.
          </dd>
        </dl>

        <button onClick={changeData}>Ayush Verma</button>&nbsp; &nbsp;
        <button id="jiya" onClick={changeData}>Jiya sharma</button>
        <br />
        <br />
        <input onChange={changeStyle} type="checkbox" />
        <label>{style.labelText}</label>
      </div>
    </div>
  );
};


export default Card;
