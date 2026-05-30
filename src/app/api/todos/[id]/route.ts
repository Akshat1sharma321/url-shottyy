import { NextResponse } from "next/server";


export async function GET(request : Request , {params}:{params : {id : string}}) {
    const {searchParams} = new URL(request.url) ; 
    console.log(searchParams.get('title'))
    const {id} = await params ; 
    return NextResponse.json({
        todo : 'Todo 1' + id
    })
}

export async function POST(){
    return NextResponse.json({response : "true"})
}