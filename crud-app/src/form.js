import axios from "axios";
import { useState } from "react";

function Form(){
        const [name,setName]=useState('');
        const [clgname,setClgname]=useState('');
        const [department,setDepartment]=useState('');
        const [year, setyear] = useState('');
        const [phone,setPhone]=useState('');
        const [textarea,setTextarea]=useState('');
        const [email,setEmail]=useState('');
        const [course,setCourse]=useState('');

        const handleSubmit=(e)=>{
            e.preventDefault();
            // console.log(name,clgname,department,phone,textarea,email);        
           const data={
            Name:name,
            Clgname:clgname,
            Department:department,
            Year:year,
            Phone:phone,
            Textarea:textarea,
            Email:email,
            Course:course
           }
           axios.post('https://sheet.best/api/sheets/14bd8976-e123-4bb1-a950-3634ed0588bc',data)
        //    .then((response)={
        //   console.log(response);
            setName('');
            setClgname('');
            setCourse('');
            setDepartment('');
            setEmail('');
            setPhone('');
            setTextarea('');
            setyear('');
            // })   
         }
        const onOptionChanges = e => {
        setyear(e.target.value)
        }
        const onOptionChange = e => {
            setCourse(e.target.value)    
        }
    return(
        <div className="backg" > 
        <form onSubmit={handleSubmit} className="bg">
        <h1 className="feedb">Feedback Form</h1>
        <label >Firstname</label>
        <input type="text" placeholder="firstname" name="name" value={name} 
        onChange={(e)=>setName(e.target.value)} ></input>
        <br></br>
       
        <label>College Name*</label>
        <input type="text" placeholder="Add answer here"   value={clgname} 
        onChange={(e)=>setClgname(e.target.value)}  ></input>
        <br></br>
        <label>Department*</label>
         <input type="text" placeholder="Add answer here" value={department}
         onChange={(e)=>setDepartment(e.target.value)} ></input>
         <br></br>
        
        <label>Year of study*</label>
        <div className="year">
        <input type="radio" name="year" className="radiobtn" value={'I'} 
        onChange={onOptionChanges} checked={year === "I"}></input>I year 
        <br></br>
        <input type="radio" name="year" value={'II'} className="radiobtn" 
        onChange={onOptionChanges} checked={year === "II"}></input>II year
        <br></br>
        <input type="radio" name="year" value={'III'} className="radiobtn" 
        onChange={onOptionChanges} checked={year === "III"}></input>III year
        <br></br>
        </div>

        <br></br>
        <label>Phone*</label>
        <input type="number" placeholder="Phone" name="phone"  value={phone}
        onChange={(e)=>setPhone(e.target.value)}></input>
        <br></br>
        <label>Email*</label>
        <input type="email" placeholder="Email" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} ></input>
        <br></br>

        <label>Give Your Feedback About Workshop*</label>
        <br></br>

        <textarea cols="30px" rows="4" placeholder="Add answer here" 
        onChange={(e)=>setTextarea(e.target.value)} value={textarea} name="textarea"></textarea>
        <br></br>

        <label>Do you have interest to join Course in idm Techpark*</label>
        <br></br>
        <div className="course">
        <input type="radio" name="java"  checked={course === "java"}
        onChange={onOptionChange} value={'java'} className="radiobtn"></input>Java
        <br></br>
        <input type="radio" name="python" checked={course === "python"}
        onChange={onOptionChange}  value={'python'} className="radiobtn"></input>python
        <br></br>
        <input type="radio" name="webdevelop" checked={course === "webdevelop"}
        onChange={onOptionChange}  value={'webdevelop'} className="radiobtn"></input>web development
        <br></br>
        <input type="radio" name="weddesign" checked={course === "webdesign"}
        onChange={onOptionChange}  value={'webdesign'} className="radiobtn"></input>web designing
        <br></br>
        <input type="radio" name="uiux" checked={course === "uiux"}
        onChange={onOptionChange}  value={'uiux'} className="radiobtn"></input>UI&Ux<br></br>
        </div>
        <br></br>
        <button type="submit" className="btn">Submit</button>
        </form>
        </div>
        
    );
}
export default Form;