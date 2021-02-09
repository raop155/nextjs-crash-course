import React from 'react';
import Link from "next/Link"
import styles from "../styles/Article.module.scss"

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/1" as={`article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;