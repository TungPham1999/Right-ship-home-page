import './SearchInput.scss';
interface SearchInputProps {
  classes: string;
}

const SearchInput = ({ classes }: SearchInputProps) => {
  return (
    <div className={`search_bar ${classes}`}>
      <span className='search_bar_icon'>
        <img src='./../images/SearchInput.svg' alt='' />
      </span>
      <input className='search_bar_input' type='text' placeholder='Search..' />
    </div>
  );
};

export default SearchInput;
