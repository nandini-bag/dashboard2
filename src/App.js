import React,{useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App=()=>{
  const [showMenubar,setShowMenubar] = useState(false);
  const [alignMenu,setAlignMenu] = useState(true);

  const ToggleMenu=()=>{
    setShowMenubar(!showMenubar);
    setAlignMenu(!alignMenu);
  }
    
  return (
    <>
      <div className='container'>
           <Header toggleMenu={ToggleMenu} showMennubar={showMenubar}/>
           <Main alignMenu={alignMenu}/>
      </div>
    </>
  );
}
export default App;
