import Form from 'react-bootstrap/Form';

function SearchBar({userInput, input}) {
  
  return (
    <Form.Control value={input} onChange={userInput} type='text' placeholder="search..."/>
  )
} ;

export default SearchBar;