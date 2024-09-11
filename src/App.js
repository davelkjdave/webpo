import logo from './logo.svg';
import './App.css';

function App() {
  // console.log('aaaaaa')
  
  return (
    <>
      {/* <div className='hi' style={{backgroundColor:'rgba(255,255,0,0.5)'}}>HO!</div> */}
      <div className='mouse_wrapper' style={{background:'#f5f5f5', borderRadius:'50%', position:'absolute', width:'135px', height:'135px', opacity:'1'}}>
        <h1 className='mouse_wrapper' style={{margin:'0', lineHeight:'135px'}}>Drag Me</h1>
      </div>
      <div className='sec_1_wraper'>
        <div className='sec_1_contents' style={{width:'1800px', background:'red', height:'100vh', margin:'0 auto'}}>
          <div className='sec_1_text'style={{margin:'0'}}>
            <h1 style={{fontSize:'138px', paddingTop:'120px', margin:'0'}}>YOUR</h1>
            <h1 style={{fontSize:'138px', margin:'0', marginTop:'-65px'}}>SUCCESS</h1>
          </div>
          <div style={{width:'720px', height:'230px', margin:'22px 0 10px'}}></div>
          <div className='down_arrow' style={{}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="82" viewBox="0 0 82 94" fill="none">
              <path d="M47.5 0H34.5L35 70.5L9 47L0 57L41 94L82 57L74 47L47.5 70.5V0Z" fill="black"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
