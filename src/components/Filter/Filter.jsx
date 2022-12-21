import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/Actions';
import {FilterInput} from './Filter.styled'

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value))
  };
    return (
      <FilterInput
        type="text"
        name="filter"
        onChange={onFilter}
        placeholder="Find contacts by name"
      />
    );
  };

export default Filter;