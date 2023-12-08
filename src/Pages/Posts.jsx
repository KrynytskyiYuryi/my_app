import React, { useEffect, useRef, useState } from "react";
import "../styles/styles.css";
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/UI/MyModal/MyModal";
import MyButton from "../component/UI/Button/MyButton";
import { usePosts } from "../Hooks/usePost";
import PostServise from "../API/PostServise";
import Loader from "../component/UI/Loader/Loader";
import { useFetching } from "../Hooks/useFetching";
import { getPagesCount } from "../Utils/pages";
import Pagination from "../component/UI/Pagination/Pagination";
import { useObserver } from "../Hooks/useObserver";
import MyDiv from "../component/MyDiv";
import MySelect from "../component/UI/Select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostServise.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setVisible(false);
  };

  const changePage = (page) => {
    setPage(page);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="app">
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue={"Total element on page"}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 20, name: "20" },
          { value: -1, name: "Show all" },
        ]}
      />
      <MyDiv>
        <MyButton onClick={() => setVisible(true)}>Create post</MyButton>
      </MyDiv>
      {postError && <h2>{postError}</h2>}
      <PostList remove={removePost} posts={sortedAndSearchedPost} />
      <hr ref={lastElement} />
      {isPostsLoading && <Loader />}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
