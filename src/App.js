import './App.css';

function App() {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log('Data:', response.data);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
