import React, { useState,useCallback, useEffect } from 'react'

export interface RenderProps {

}

const Render: React.FunctionComponent<RenderProps> = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(()=>{
    setCount(count+1);
  },[count])
  console.log('parent render');
  return (
    <div style={{textAlign:'center'}}>
      {count}
      {count%2===0?<Son count={count}/>:null}
      <button onClick={handleClick}>加一</button>
    </div>
  );
}

export default Render;

interface SonProps{
  count:number
}
const Son: React.FunctionComponent<SonProps> = React.memo((props) => {
  useEffect(()=>{
    console.log('son mounted');
    return ()=>{
      console.log('son umounted');
    }
  },[])
  return (
    <div>
      son
    </div>
  )
})
