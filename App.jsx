import React, { useState } from 'react';

function App() {
  const [itens, setItens] = useState<string>([]); 
  const [novoItem, setNovoItem] = useState<string>(''); 

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
     
      setItens([...itens, novoItem]); 
      setNovoItem('');
    }
  };

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="Novo item"
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>
    </div>
  );
}

export default App;


