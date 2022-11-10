import './App.css';
// Amplify関連
import { Amplify } from 'aws-amplify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import { Button } from "@aws-amplify/ui-react";


// Auth
import aws_exports from "./aws-exports";
import { Auth } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";


//コンポーネント
import Comptest from "./components/Comp_test"; 
import Topbar from './components/Topbar';
import Cardcreate from './components/Cardcreate';
import CarddisplayCollection from './components/CarddisplayCollection';
//import Cardedit from './components/Cardedit';

//Auth用
Amplify.configure(aws_exports);
//APP
function App() {
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {setShowModal(true);};
   async function signOut() {
     try {
         await Auth.signOut({ global: true });
     } catch (error) {
         console.log('error signing out: ', error);
     }
 }
  return (
    <div>
      <Button display="flex" position="absolute" top="50px" left="85%" size="small" isDisabled={false} variation="info" children=" Sign out " onClick={() => { signOut({ global: true }); }}></Button>
      <Topbar/>
      <div style={{
       position: 'absolute', left: '50%', top: '128px',
       transform: 'translate(-50%, -0px)'
      }}>
      <BrowserRouter >
        <Routes>
          <Route path="/test" element={<Comptest />} />
          <Route path="/create" element={<Cardcreate />} />
          <Route path="/" element={<CarddisplayCollection />} />
        </Routes>
      </BrowserRouter>
      {/* Appコンポーネントから子であるModalコンポーネントにpropsを渡す */}
      {/* <Modal showFlag={showModal} setShowModal={setShowModal} content="ここでクローズしてください。" />*/}
      <Cardcreate showFlag={showModal} setShowModal={setShowModal} content="ここでクローズしてください。" />
      </div>
      <Button display="flex" position="absolute" top="128px" left="65%" size="small" isDisabled={false} variation="primary" children="Create Profile" onClick={() => {ShowModal(); }}></Button>
    </div>
  );
}

//Auth用
export default withAuthenticator(App);
//export default App;