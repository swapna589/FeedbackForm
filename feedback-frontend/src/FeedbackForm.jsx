import React,{useState} from "react";
import axios from "axios";

export default function FeedbackForm() {
    const [form,setForm]=useState({name: "", USN:"",email:"",message:""});
    const [status,setStatus]=useState("");

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/feedback",form);
            setStatus(" 🤝Feedback submitted sucessfully!");
            setForm({name:"",USN:"",email:"",message:""});
        }catch(err){
            setStatus(" ❌Failed to submit feedback");
        }
    };

    return(
        <div style={{padding:"20px"}}>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                placeholder="your name"
                value={form.name}
                onChange={handleChange}
                required
                /><br/><br/>
                <input
                name="USN"
                placeholder="your USN"
                value={form.USN}
                onChange={handleChange}
                required
                /><br/><br/>
                <input
                type="email"
                name="email"
                placeholder="your email"
                value={form.email}
                onChange={handleChange}
                required
                /><br/><br/>
                <textarea
                name="message"
                placeholder="your Feedback"
                value={form.message}
                onChange={handleChange}
                required
                /><br/><br/>
                <button type="submit">submit</button>
                
            </form>
            <p>{status}</p>
        </div>
    );
}