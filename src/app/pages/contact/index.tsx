import axios from "axios";
import { format } from "path";
import { useEffect, useState } from "react"

export function Contact() {
  const [users, setUsers] = useState([])

  async function getCustomer() {
    try {
      const response = await axios.get('https://eojwoz6wyi8rxxe.m.pipedream.net')
      console.log('response')
      console.log(response)

      setUsers(response.data)
    } catch(error) {  
      console.log(error)
    }
  }

  useEffect(() => {
    getCustomer()
  }, []);
  return (
    <table className="min-w-full text-left text-sm font-light text-zinc-900 mt-8">
      <thead className="border-b font-medium">
        <tr>
          <th scope="col" className="px-6 py-4">Nome</th>
          <th scope="col" className="px-6 py-4">Email</th>
          <th scope="col" className="px-6 py-4">CPF</th>
          <th scope="col" className="px-6 py-4">Data Nascimento</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index} className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4">{item?.properties?.Name?.title[0]?.text?.content}</td>
            <td className="whitespace-nowrap px-6 py-4">{item?.properties?.Email?.email}</td>
            <td className="whitespace-nowrap px-6 py-4">{item?.properties?.CPF?.rich_text[0]?.text?.content}</td>
            <td className="whitespace-nowrap px-6 py-4">{item?.properties['Data Nascimento'].date?.start}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}