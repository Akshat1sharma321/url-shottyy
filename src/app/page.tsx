// "use client"

// import { useState, useTransition } from "react";
import connect_mongoDB from "../config/db";
import Link from "next/link";
import { shortenUrl } from "./serverActions/ShortenActions";

export default function Home() {
  // try{
  //   await connect_mongoDB()  ;
  //   console.log("Connected Successfully") ;
  // }catch(error){
  //    console.log("Connected UnSuccessfully");
  // }
  // const [originalUrl , setOriginalUrl] = useState('') ;
  // const [shortUrl , setshortUrl] = useState('') ;
  // const [isPending , startTransition] = useTransition() ;

  // const handleSubmit = async(e : React.FormEvent)=>{
  //   e.preventDefault() ;
  //   startTransition(async ()=>{

  //   })
  // }
  // return (
  //  <>
  //  URL shorty
  //  </>
  // );
  return (
    <>
      <div className=" font-mono min-h-screen flex  flex-col items-center justify-center bg-linear-to-r from-blue-600 to-purple-500">
        <div className="p-10 bg-white rounded-2xl shadow-2xl max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-700 ">
            URL Shortyy
          </h1>
          <form action={shortenUrl} className="space-y-6">
            <input
              type="text"
              placeholder="Enter URL"
              name="originalUrl"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">
              Shorten
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <Link href="/urls">
            <span className="btn btn-secondary">View All Shortened URLs</span>
          </Link>
        </div>
      </div>
    </>
  );
}
