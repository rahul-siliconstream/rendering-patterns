import './style.css';

export default async function ServerComp(){

    const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await jsonData.json();

  return (
    <div className="container">
      <div className="card">
        <p className="title">{data?.title}</p>
        <p className="para">{data?.body}</p>
      </div>
    </div>
  );
}