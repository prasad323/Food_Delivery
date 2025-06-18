import { connectionString } from "@/app/lib/db";
import { restaurentSchema } from "@/app/lib/restaurentModel";
import { connection, NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionString,{useNewUrlParser: true,})
    const data  = await restaurentSchema.find()
    console.log(data)
  return NextResponse.json({result:true})
}