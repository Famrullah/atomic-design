import React from 'react'
import { Text } from '../../components/atom/text'
// const people: any = [
//   {
//     name: 'Calvin Hawkins',
//     email: 'calvin.hawkins@example.com',
//     image:
//       'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Kristen Ramos',
//     email: 'kristen.ramos@example.com',
//     image:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Ted Fox',
//     email: 'ted.fox@example.com',
//     image:
//       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
// ]
const style = {
  color: 'blue',
}
const Home = () => {
  return (
    <>
      <Text tag="span" style={style} className="">
        ini judulnya
      </Text>
      {/* <ul className="divide-y divide-gray-200">
        {people.map((person: any) => (
          <li key={person.email} className="py-4 flex">
            <img
              className="h-10 w-10 rounded-full bg-blue"
              src={person.image}
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
              <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default Home
