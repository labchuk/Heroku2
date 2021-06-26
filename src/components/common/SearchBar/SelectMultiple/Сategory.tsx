import React,{useState}from "react"
import {SelectMultiple} from "../../../index"

const Сategory = ({clName,data,name}:{clName:string, data:string[],name:string}) => {
    
    const [arrTag, setArrTag] = useState<string[]>([])

    const addSetArrTag = (tag:any) =>{
        setArrTag(tag);
    }

    return(
        <>
        <SelectMultiple data={data} clName={clName} name={name} setArrTag={addSetArrTag}/>
        {arrTag.map(item=>
            <SelectMultiple data={data} clName={clName} name={item} setArrTag={null}/>
        )}
        </>
    );
}

export default Сategory;