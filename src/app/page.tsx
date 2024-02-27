import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {  createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { cookies } from "next/headers"; 
import { RedirectType, redirect } from "next/navigation";

export default async function Home() {
  let loggedIn = false;
  try {
    const supabase = createServerComponentClient({cookies})
    const { data: {session}, 
  } = await supabase.auth.getSession()
  if (session) {
      loggedIn = true;
    }

  }catch(error) {
    console.log("Home", error)
  } finally {
    if (loggedIn) redirect("/user-app", RedirectType.replace)
  }

  return (
    <>
    
      <div className="items-center justify-between">
       <Header />
      </div>
      
      <div className="flex items-center justify-center space-x-4 mt-40 gap-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Explore o Universo 
          <br />dos <span className="text-blue-700">Animes</span></h1>
        <p className="text-xl mt-2">Avalie, Comente e Compartilhe sua Paixão 
          <br />pela Cultura Anime</p>
        <Button className="w-64 h-12 mt-6 text-lg bg-blue-700">
          Cadastrar
        </Button>
      </div>
       
       </div>
     
    </>
  );
}
