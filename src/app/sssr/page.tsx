import { Suspense } from 'react';
import './style.css';

async function Comp1(){
  const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store'})
  const data = await jsonData.json();
  return (
  <>
    <p className="title">{data?.title}</p>
    <p className="para">{data?.body}</p>
  </>
  );
}

async function Comp2() {
  const name: string = await new Promise((res, rej)=>{
    setTimeout(()=>{
      res('Aman Madhukar');
    },6000);
  });

  return <p className='para'>{name}</p>;
}

async function Comp3() {
  const email: string = await new Promise((res, rej)=>{
    setTimeout(()=>{
      res('aman.siliconstream@gmail.com');
    },3000);
  });

  return <p className='para'>{email}</p>;
}

export default async function StreamingSSRComp(){

  return (
    <div className="container">
      <div className="card">
        <Suspense fallback={<p>Loading...</p>}>
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </Suspense>
        <p>{new Date().toISOString()}</p>
      </div>
    </div>
  );
}