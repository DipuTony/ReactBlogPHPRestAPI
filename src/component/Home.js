import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () =>{

const [blog, setBlog] = useState(null);
const [IsPending, setIsPending] = useState(true);

useEffect(() =>{
    // fetch('https://mocki.io/v1/c20185fb-cca9-4e31-9104-391515061019')
    fetch('http://localhost/api/restapi/items/read')
    .then(res => {
        return res.json();
    })
    .then(data =>{
        setBlog(data);
        setIsPending(false);
    })

},[]);


    return(
        <div className="home">
            {IsPending && <div> Loading.... </div> }
            {blog && <BlogList blog={blog} title="All Blogs Posts"/> }
        </div>
    );
}

export default Home;