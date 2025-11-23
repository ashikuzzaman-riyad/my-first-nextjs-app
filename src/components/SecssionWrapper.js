"use client"
import { SessionProvider } from "next-auth/react"



export default function SecssionWrapper({children}) {
  return (
   <SessionProvider>{children}</SessionProvider>
  )
}
