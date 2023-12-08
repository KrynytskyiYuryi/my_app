import Posts from "../Pages/Posts";
import About from "../Pages/About";
import PostIdPage from "../Pages/PostIdPage";
import Log from "../Pages/Log";

export const priveteRoutes = [
  { path: "about/", component: <About />, exect: true },
  { path: "posts/", component: <Posts />, exect: true },
  { path: "posts/:id", component: <PostIdPage />, exect: true },
];
export const publicRoutes = [{ path: "log/", component: Log, exect: true }];
