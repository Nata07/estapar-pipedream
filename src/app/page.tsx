"use client"
import { useState } from "react";
import { Contact } from "./pages/contact";
import NewContact from "./pages/contact/NewContact";

export default function Home() {
  const [isNewContact, setIsNewContact] = useState(false)
  return (
    <div className="flex flex-col min-h-screen w-full py-16 px-16 items-center">
      <div className="w-3/4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl text-zinc-600">Lista de contatos</h1>
          { isNewContact ? 
            <button onClick={() => setIsNewContact(true)} className="ml-auto py-4 px-6 rounded-md text-blue-500 font-medium">Voltar</button>
          : <button onClick={() => setIsNewContact(true)} className="ml-auto py-4 px-6 bg-indigo-600 rounded-md text-white font-medium">+ Novo Contato</button>
          }
        </div>
        {isNewContact ? <NewContact handleBack={() => setIsNewContact(false)} /> : <Contact />}
      </div>
    </div>
  )
}
