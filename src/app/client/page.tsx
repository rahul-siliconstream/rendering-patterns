'use client';

import { useEffect, useState } from "react";
import './style.css';

export default function ClientComp(){
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {
        loading? <p>Loading...</p>
        :
        <div className="card">
          <p className="title">{data?.title}</p>
          <p className="para">{data?.body}</p>
        </div>
      }
    </div>
  );
}