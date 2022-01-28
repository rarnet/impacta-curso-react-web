import { useState } from 'react';
import Title from './components/Title';

const App: React.FC = () => {

  const [inputName, setInputName] = useState({
    message: "",
    value: "",
    colorMessage: "red"
  });
  
  const [inputPassword, setInputPassword] = useState({
    message: "",
    value: "",
    colorMessage: "red"
  });
  
  function handdleOnChangeName(e: React.ChangeEvent<HTMLInputElement>){

    setInputName({
      message: "Valido",
      value: e.currentTarget.value,
      colorMessage: "green"
      });
  
  }

  function handdleOnChangePassword(e: React.ChangeEvent<HTMLInputElement>){

    setInputPassword({
      message: "Valido",
      value: e.currentTarget.value,
      colorMessage: "green"
      });
  
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    
    e.preventDefault();
    
    if(!!!inputName.value){
      setInputName({
        message: "Esse campo não pode ser vazio",
        value: inputName.value,
        colorMessage: "red"
      });
    }

    if(!!!inputPassword.value){
      setInputPassword({
        message: "Esse campo não pode ser vazio",
        value: inputPassword.value,
        colorMessage: "red"
      });
    }

  }

  return (
    <div>
      <Title children="Formulário"/>
      <form onSubmit={handleSubmit} >
        <label>Nome: </label>
        <input type="text" onChange={handdleOnChangeName} />
        <br/>
        <samp style={{color: inputName.colorMessage}}> {inputName.message} </samp>
        <br/>
        <br/>
        <label>Senha: </label>
        <input type="password" onChange={handdleOnChangePassword} />
        <br/>
        <samp style={{color: inputPassword.colorMessage}}> {inputPassword.message} </samp>
        <br/>
        <br/>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;