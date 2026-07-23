import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import FeedPage from './pages/FeedPage';
import PostDetailPage from './pages/PostDetailPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <FeedPage /> },
      { path: '/post/:id', element: <PostDetailPage /> },
    ],
  },
]);