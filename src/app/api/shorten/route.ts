import { UrlShortenerService } from "@/src/services/urlShortenerService";
import { NextResponse } from "next/server";

export async function POST(req : Request){
    const {originalUrl} = await req.json() ; 
    console.log(originalUrl) ; 
    const shortenerService = new UrlShortenerService() ; 
    const shortUrl = await shortenerService.shortenUrl(originalUrl) ; 
    return NextResponse.json({shortUrl},{status : 201}) ; 
}

export async function GET(){
    const shortenerService = new UrlShortenerService() ; 
    const response = await shortenerService.getAllUrls() ; 
    return NextResponse.json({response}) ; 
}