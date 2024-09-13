// import logo from './logo.svg';
import './App.css';

function App() {
  // console.log('aaaaaa')

  // var mouse_wrapper = document.getElementsByClassName('mouse_wrapper')

  // mouse_wrapper.addEventListener('mousemove', (event) => {
  //   mouse_wrapper.style.left = '{event.clientX}px'
  //   mouse_wrapper.style.top = '{event.clientY}px'
  // })
  
  // let keyframes = [
  //   {opacity: 1, bottom:'100px'},
  //   {opacity: 1, bottom:'0px'}
  // ];
  // let options = {
  //     delay: 3000,
  //     easing: "liner",
  //     iterations: Infinity,
  // };
  
  // document.querySelector(".down_arrow").animate(keyframes, options);

  return (
    <>
      <div className='mouse_wrapper' style={{background:'#f5f5f5', borderRadius:'50%', position:'absolute', width:'135px', height:'135px', opacity:'1'}}>
        <h1 className='mouse_wrapper_text' style={{margin:'0', lineHeight:'135px'}}>Drag Me</h1>
      </div>
      <div className='sec_1_wrapper'>
        <div className='sec_1_contents' style={{width:'1800px', background:'red', height:'100vh', margin:'0 auto', position:'relative', overflow:'hidden'}}>
          <div className='down_arrow' style={{position:'absolute', left:0, bottom:'100px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="82" viewBox="0 0 82 94" fill="none">
              <path d="M47.5 0H34.5L35 70.5L9 47L0 57L41 94L82 57L74 47L47.5 70.5V0Z" fill="black"></path>
            </svg>
          </div>
          <div className='sec_1_text_1'style={{margin:'0'}}>
            <h1 style={{fontSize:'138px', paddingTop:'120px', margin:'0'}}>YOUR</h1>
            <h1 style={{fontSize:'138px', margin:'0', marginTop:'-65px'}}>SUCCESS</h1>
          </div>
          <div style={{width:'720px', height:'230px', margin:'22px 0 10px'}}></div>
          <div className='sec_1_text_2' style={{position:'absolute', right:0}}>
            <h1 style={{fontSize:'138px', margin:'0'}}>IMPRESSION</h1>
            <h1 style={{fontSize:'138px', margin:0, marginTop:'-65px', position:'absolute', right:0}}>TO I MOTTO</h1>
          </div>
        </div>
      </div>
      <div className='sec_2_wraper'> 
        <div className='sec_2_contents' style={{width:'1800px', background:'blue', height:'50vh', margin:'0 auto', position:'relative', boxSizing:'border-box', border:'5px solid black', marginTop:'400px'}}>
          <div className='sec_2_con_1'>
            <span>91/</span>
          </div>
          <div className='sec_2_con_2'>
            <p style={{paddingLeft:'200px', fontSize:'25px', fontWeight:'bold'}}>“고객사의 성공” 아이모토가 만들어갑니다.</p>
            <p style={{paddingLeft:'200px', fontSize:'30px'}}>아이모토는 최고의 전문 컨설턴트가 고객사의 입장에서 생각하며, 최신 트렌드 제안 및 고객사의 비즈니스 사업성공을 위하여 다양한 분야에서 서비스 하고 있습니다. 다년간의 노하우와 능동적인 커뮤니케이션을 통해 고객사의 요구사항에 적합한 결과물로 성공적인 비즈니스를 실현합니다.</p>
          </div>
        </div>
        <div className='sec_2_contents' style={{width:'1800px', background:'blue', height:'50vh', margin:'0 auto', position:'relative', boxSizing:'border-box', border:'5px solid black'}}>
          <p style={{paddingLeft:'200px', fontSize:'25px', fontWeight:'bold'}}>“정부지원사업” 아이모토가 함께 합니다.</p>
          <p style={{paddingLeft:'200px', fontSize:'30px'}}>수출지원기반사업, 제조중소기업혁신바우처사업 외 정부지원사업도 아이모토가 함께 합니다. 고객사의 맞춤형 솔루션에 즉각적으로 대응할수 있도록 준비된 아이모토의 완성도 높은 소통체계와 각 분야의 전문가가 고객사와 성공을 함께 하고자 합니다. 팀워크, 열정, 신뢰, 창의는 아이모토가 추구하는 가치 입니다.</p>
        </div>
      </div>
      <div className='sec_3_wraper'>
        <div className='sec_3_contents' style={{width:'1800px', background:'aqua', height:'100vh', margin:'0 auto', position:'relative', boxSizing:'border-box', border:'5px solid black'}}></div>
        <div className='sec_3_contents' style={{width:'1800px', background:'aqua', height:'100vh', margin:'0 auto', position:'relative', boxSizing:'border-box', border:'5px solid black'}}></div>
        <div className='sec_3_contents' style={{width:'1800px', background:'aqua', height:'100vh', margin:'0 auto', position:'relative', boxSizing:'border-box', border:'5px solid black'}}></div>
        <div className='sec_3_contents' style={{width:'1800px', background:'aqua', height:'100vh', margin:'0 auto', position:'relative', boxSizing:'border-box', border:'5px solid black'}}></div>
      </div>
    </>
  );
}

export default App;
