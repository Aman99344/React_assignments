import {useState, useEffect} from 'react'

const ImageComp = () => {

    useEffect(()=>{
        console.log("CallBack Function From Image Components")
    },[])
    

  const [reactimg, setReactImg] = useState("https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png")
  const [title, setTitle] = useState(true)

  return (
    <div>
        <h2>{title ? "React Image Components" : "Angular Image Components"}</h2>
        <img src={reactimg} width={300} height={250} alt="" />
        <br />
        <button onClick={()=>{setReactImg("https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png")}} style={{margin: "10px"}}>React</button>
        <button onClick={()=>{setReactImg("https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png")}}>Angular</button>&nbsp; &nbsp;
        <button onClick={()=>{setTitle(!title)}}>Toggle Title</button>
    </div>
  )
}

export default ImageComp

