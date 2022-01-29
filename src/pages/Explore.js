import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import ExploreCard from '../components/shared/HorizontalCard';
import React, { useState } from 'react';
import styles from './Explore.module.css';


function Explore() {
  const [filter,setFilter] = useState('')
  const list = ['전체','BTS','LISA','아이폰']

  function category(e){
    if(e.target.innerHTML==='전체'){
      setFilter("");
    } else{
      setFilter(e.target.innerHTML)
    }
  }


  return (
    <Layout activeMenu="explore">
      <ul className={styles.category}>
          {list.map((data,index)=>(
            <li onClick={category} key={index} className={filter === data
            ? styles.setCategory
            : null
          }>{data}</li>
            ))}
        </ul>
      <ContentsLayout>
        {youtubeData['data'].filter((data)=>data.title.includes(filter)).map(function(data, index) {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Explore;




