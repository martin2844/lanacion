import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://api-contenidos.lanacion.com.ar/json/v2/acumulado/refererHome").then(res => setInfo(res.data.items));

  }, [])

  console.log(info);
  
  let tags = info.map((a) => {
    return a.tags.map(a => a.valor);
  })
  console.log(tags.flat());

  let categories = info.map((item) => {
    return item.categoriaDescripcion;
  })

  const countOccurrences = (arr) => {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  } 

  const last5 = info.slice(0, 5);
  const last5Titles = last5.map((a) => {
    return(
      <div key={a.titulo}>
        {a.titulo}
      </div>
    )
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Hellow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
      Hello world<br />
      {JSON.stringify(countOccurrences(tags.flat()))}
      {JSON.stringify(countOccurrences(categories))}
      {last5Titles}
    </div>
    
    </div>
  )
}
