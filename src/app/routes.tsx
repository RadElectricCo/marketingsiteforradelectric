import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'gallery',
        Component: GalleryPage,
      },
      {
        path: 'services/:serviceSlug',
        Component: ServiceDetailPage,
      },
    ],
  },
]);