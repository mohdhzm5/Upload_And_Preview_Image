import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  upload(e)
  {
    console.warn(e.target.files)
    const files=e.target.files
    const formData=new FormData();
    formData.append('img',files[0]);
     fetch('http://127.0.0.1:8000/api/store',
      { method:"POST",
        body:formData
      }
    ).then((resp)=>{
      resp.json().then((result)=>{
        console.warn("result",result)
      })
    })

     console.log('img');
  }
  render(){
     
  return (
    <div>

      <h1>UPLOAD zfILES</h1>
     <input type="file" onChange={(e)=> this.upload(e)} name="img"/>
      
      
    </div>
  );

  }
}

export default App;
