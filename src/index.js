// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

let apiKey = "03ob4taaa6f366304d608c02ae4ad453";
let prompt = "Be polite and provide a short answer";
let context ="When was the first AI created?";
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("Processing...");
axios.get(apiUrl).then(showResult);

function showResult(response)
{
  console.log(response.data.answer);
  return(
  <h1>This is axios</h1>
);}