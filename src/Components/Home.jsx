import React from "react";
import Post from "./Post";

import styles from "./Home.module.css";

const Home = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetch("/posts.json");
      const postsJSON = await posts.json();
      setPosts(postsJSON);
      console.log(postsJSON);
    };

    fetchPosts();
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.mainContainer} container`}>
        <ul className={styles.mainList}>
          {posts &&
            posts.map((post, index) => {
              const { image, visualizations } = post;
              return (
                <li className={styles.mainItem} key={index}>
                  <Post img={image} visualizations={visualizations} />
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
};

export default Home;
