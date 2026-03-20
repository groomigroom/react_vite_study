import ReactDOM from 'react-dom/client'
import './App.css';

const App = () => {
  const rootVirtualDOM =
    <div className='box_full'>
      <div className="box_slide">
        <div>박스 1</div>
        <div>박스 2</div>
        <div>박스 3</div>
      </div>
    </div>;
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  root.render(rootVirtualDOM)

}

export default App
/*
import React, { useEffect, useRef } from 'react';

const App = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (!slideRef.current) return;

      index++;
      slideRef.current.style.transform = `translateX(-${index * 100}%)`;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='box_full'>
      <div className="box_slide" ref={slideRef}>
        <div>박스 1</div>
        <div>박스 2</div>
        <div>박스 3</div>
      </div>
    </div>
  );
};

export default App;
*/


/*
import React, { useEffect, useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='box_full'>
      <div
        className="box_slide"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <div>박스 1</div>
        <div>박스 2</div>
        <div>박스 3</div>
      </div>
    </div>
  );
};
*/
