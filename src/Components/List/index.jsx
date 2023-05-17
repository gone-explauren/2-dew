import { useContext, useState } from 'react';
import { Pagination } from '@mantine/core'
import { SettingsContext } from '../../Context/Settings';

function List({ list, toggleComplete, incomplete }) {
  const settings = useContext(SettingsContext)
  const [activePage, setPage] = useState(1);

  const paginate = (items, activePage, numberToDisplay) => {
    let start = (activePage - 1) * numberToDisplay;
    return items.slice(start, start + numberToDisplay);
  }
  const calculateTotal = () => {
    return Math.ceil(list.length / settings.itemsToDisplay);
  }

  console.log(paginate(list, activePage, settings.itemsToDisplay));
  return (
    <>
      {paginate(list, activePage, settings.itemsToDisplay).map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

      <Pagination
        onChange={(page) => setPage(page)}
        current={activePage}
        total={calculateTotal()}
        color="cyan" size="lg" radius={"md"} />
    </>
  )
}

export default List;