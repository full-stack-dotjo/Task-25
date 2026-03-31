import { NextResponse } from "next/server";
import { posts } from "../route";

export const GET=async(req,props)=>{
    console.log(req);
    const {id}=await props.params
   
    const post=posts.find((elem)=>{
      
        return  elem.id === +id
    })
   
if(!post){
    return NextResponse.json({message:"Not found"},{status:404})
}
else{return NextResponse.json(post,{status:200})}
    
    

}