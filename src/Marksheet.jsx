import "./styles.css";
import React, {useState, useEffect} from "react";

export default function Marksheet() {
    const [count, setCount]=useState(null);
    const [subj, setSubj]=useState({
        eng:0,tam:0,mat:0,sci:0,soc:0
    });
    const [per, setPer]=useState(0);

    const handleSubjects=(e)=>{
        if(e.target.value>0 && e.target.value<100 ){
            setSubj({...subj, [e.target.name]:parseInt(e.target.value)});
        }else {
            alert('Please enter number between 0 to 100');
        }
    };

    useEffect(()=>{
        // const{eng,tam,mat,sci,soc}=subj;
        // let total = parseInt(eng)+parseInt(tam)+parseInt(mat)+parseInt(sci)+parseInt(soc);
        const subjValues = Object.values(subj);
        console.log(subjValues)
        const total = subjValues.reduce((accum, curr) => (accum +curr), 0);
        setCount(total);
    },[subj]);

    const handlePercentage=()=>{
        setPer(count/5);
    }
    
    return (
      <div className="sheet">
        <label className="subjects"> English<input placeholder='enter the english marks'onChange={handleSubjects} className="inputfield" name='eng'/></label>
        <br/>
        <label className="subjects"> Tamil<input placeholder='enter the tamil marks'onChange={handleSubjects} className="inputfield" name='tam'/></label>
        <br/>
        <label className="subjects"> Math<input placeholder='enter the math marks'onChange={handleSubjects} className="inputfield" name='mat'/></label>
        <br/>
        <label className="subjects"> Science<input placeholder='enter the science marks'onChange={handleSubjects} className="inputfield" name='sci'/></label>
        <br/>
        <label className="subjects"> Social<input placeholder='enter the social marks'onChange={handleSubjects} className="inputfield" name='soc'/></label>
        <h1>Total-{count}</h1>
        <h1>Percentage-{per}<button onClick={handlePercentage} className="percentage">Get Percentage</button></h1>
      </div>
    );
  }
  