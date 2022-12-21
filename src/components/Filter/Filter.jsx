import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/phonebook/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  
  const handleFinder = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value))
  }

        return (
          <>
          Find contacts by name 
              <input name="filter" onChange={handleFinder}></input>
          </>

        )
    }