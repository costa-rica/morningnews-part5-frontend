import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';

function Home() {
  const bookmarks = useSelector((state) => state.bookmarks.value);

  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  const hiddenArticle = useSelector((state) => state.hiddenArticles.value)
  const showAll = useSelector((state) => state.hiddenArticles.showAll)

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, []);

  const articles = articlesData.map((data, i) => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.title === data.title);
    if(!hiddenArticle.includes(data.title) || showAll){
      return <Article key={i} {...data} isBookmarked={isBookmarked} />;
    }
  });

  let topArticles;
  if (bookmarks.some(bookmark => bookmark.title === topArticle.title)) {
    topArticles = <TopArticle {...topArticle} isBookmarked={true} />
  } else {
    topArticles = <TopArticle {...topArticle} isBookmarked={false} />
  }

  const verifieDesChose = () => {
    console.log(`showAll: ${showAll}`)
    console.log(`hiddenArticle.length: ${hiddenArticle.length}`)
  }

  let btnVerifie = <button onClick={()=>verifieDesChose()}>Verifie</button>
  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
        
      </Head>
      {btnVerifie}
      {topArticles}
      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default Home;
