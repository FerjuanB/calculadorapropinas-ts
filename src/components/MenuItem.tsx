import type {MenuItem} from '../types'
type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
    className='border-2 border-teal-400 rounded-lg
    w-full p-3 flex justify-between
    hover:bg-teal-200 hover:text-blue-950 hover:text-xl hover:font-extrabold
    hover:transition-opacity duration-500 ease-in-out'
    onClick={() => addItem(item)}
    >
    
    <p>{item.name}</p>
    <p className='font-black hover:text-red-400'>$ {item.price}</p>
    </button>
  )
}
