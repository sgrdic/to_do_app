

function SearchBar({userInput, input}) {
  
  return (
    <input value={input} onChange={userInput} type='text' placeholder="search..."/>
  )
} ;

export default SearchBar;