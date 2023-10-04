import { format, parse } from "date-fns";
import { FormEvent, useState } from "react";

export type UserProps = {
  name: string
  email: string;
  cpf: string
  birthDate: string;
}

interface NewContactProps {
  handleBack: () => void;
}

export default function NewContact({ handleBack }: NewContactProps) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    cpf: '',
    birthDate: '',
  })

  async function handleUser(e: FormEvent) {
    console.log(user)
    e.preventDefault()
    const dataParse = parse(user?.birthDate, 'dd/MM/yyyy', new Date());
    const dataFormatada = format(dataParse, 'yyyy-MM-dd');
    const userData = {
      ...user,
      birthDate: dataFormatada,
    }

    console.log(dataFormatada)
    console.log(userData)
    try {
      const response = await fetch('https://eozt128skl6p6n1.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('response')
        console.log(response)
        // A chamada API foi bem-sucedida, você pode lidar com a resposta aqui.
        console.log('Dados enviados com sucesso!');
        handleBack();
      } else {
        // Lidar com erros da chamada API, se necessário.
        console.error('Erro ao enviar dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  }

  return (
    <form className="mt-24" onSubmit={(e) => handleUser(e)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Informe seus dados</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Preencha o formulário abaixo.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome completo</label>
              <div className="mt-2">
                <input type="text" onChange={(e) => setUser({...user, name: e.target.value})} name="name" id="name" className=" px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">CPF</label>
              <div className="mt-2">
                <input type="text" onChange={(e) => setUser({...user, email: e.target.value})} name="cpf" id="cpf" className=" px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" onChange={(e) => setUser({...user, cpf: e.target.value})} name="email" type="email"className="bl px-4 ock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="birthDate" className="block text-sm font-medium leading-6 text-gray-900">Data Nascimento</label>
              <div className="mt-2">
                <input type="text" onChange={(e) => setUser({...user, birthDate: e.target.value})} name="birthDate" id="birthDate" className=" px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={handleBack} type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  )
}