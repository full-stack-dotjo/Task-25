import { NextResponse } from "next/server";
import { posts } from "../route";

export const GET = async (req) => {
  console.log(req);
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  
  const post = posts.find((elem) => {
    return elem.id === +id;
  });
if(!post){
    return NextResponse.json({message:"Not found"},{status:404})
}
else{return NextResponse.json(post,{status:200})} 

};