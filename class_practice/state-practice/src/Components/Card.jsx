import { useState } from "react";

function Card() {

    let [state, setState] = useState({
        name: "Raj Sinha",
        email: "rajsinha@gmail.com",
        gender: "male",
        img: "https://media.istockphoto.com/id/1208414307/photo/happy-male-executive-in-office.jpg?s=612x612&w=0&k=20&c=3krD8gIdPmHFVwbcHGyQDXUGlcyzmcWQNyRMRp_93P8="
    })

    let [color, setColor] = useState({
        bgcolor: "white",
        textColor: "black",
        labelText: "Check to Switch to Dark Mode"
    })


    function priyaDetails(){
        setState({
            name: "Priya singh",
            email: "PriyaSingh@gmail.com",
            gender: "Female",
            img: "https://img.freepik.com/free-photo/cheerful-business-woman-standing-isolated_171337-8492.jpg"
        })
    }

    function rajDetails(){
        setState({
            name: "Raj Sinha",
            email: "rajsinha@gmail.com",
            gender: "male",
            img: "https://media.istockphoto.com/id/1208414307/photo/happy-male-executive-in-office.jpg?s=612x612&w=0&k=20&c=3krD8gIdPmHFVwbcHGyQDXUGlcyzmcWQNyRMRp_93P8="
        })
    }

    function validate(){
        var input = document.getElementById("checkBoxInput")
        if(input.checked){
           setColor({
            bgcolor: "black",
            textColor: "white",
            labelText: "UnCheck to Switch to Lite Mode"

           })
        }
        else{
        setColor({
            bgcolor: "white",
            textColor: "black",
            labelText: "Check to Switch to Dark Mode"

        })
        }
    }

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div
                style={{
                    width: "60%",
                    boxShadow: "0 0 10px black",
                    height: "50%",
                    margin: "100px auto",
                    display: "flex"
                }}
            >
                <div>
                    <img
                        src={state.img}
                        height="355px"ContainerRight
                        width="300px"
                        alt=""
                    />
                </div>
                <div id="" style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start", backgroundColor: color.bgcolor, color: color.textColor,}}>
                    <h3>{state.name}</h3>
                    <h3>{state.email}</h3>
                    <h3>{state.gender}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur perspiciatis ullam quas enim sed facere soluta laborum quaerat voluptatum.</p>
                    <input onChange={validate} type="checkbox" name="" id="checkBoxInput" />
                    <label htmlFor="">{color.labelText}</label>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "-80px", }}>
                <button onClick={rajDetails} style={{ marginRight: "50px", padding: "10px" }}>Raj Sinha</button>
                <button onClick={priyaDetails} style={{ padding: "10px" }}>Priya singh</button>
            </div>
        </div>
    );
}

export default Card;
