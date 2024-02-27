import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cookies } from "next/headers";
import { NavigationMenuDemo } from "../Menu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { RedirectType, redirect } from "next/navigation";

export default async function Header() {
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

return  <header className="flex items-center justify-between border-b-[1px] border-b-zinc-700">
        {loggedIn ? (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
       <span className="text-blue-600 font-bold text-4xl">ア</span>
        <NavigationMenuDemo></NavigationMenuDemo>
        </nav>
        ) : (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
       <span className="text-blue-600 font-bold text-4xl">ア</span>
       </nav>
        )}
      </header>
      
        }
        



