"use client"
import { useAuthStore } from "@/utils/store/Auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
     const session = useAuthStore();
     const router = useRouter();

     React.useEffect(() => {
          if(session){
               router.push("/")
          }
     }, [session, router])

     if(!session) {
          return null
     }

     return (
          <>
               {children}
          </>
     )
}