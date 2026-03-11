import './style.css';

export default async function SsgComp(){

    const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await jsonData.json();

  return (
    <div className="container">
      <div className="card">
        <p className="title">{data?.title}</p>
        <p className="para">{data?.body}</p>
        <p>{new Date().toISOString()}</p>
      </div>
    </div>
  );
}