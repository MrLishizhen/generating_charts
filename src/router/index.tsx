import App from '@/App';
import Empty from '@/views/empty';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hook';
import { get_routers } from '@/router/utils';
import _ from 'lodash';

// interface route {
//   label?: string;
//   key?: string;
//   path?: string;
//   element?: React.ReactNode;
//   children?: route[];
//   errorElement?: React.ReactNode;
//   meta?: meta;
// }

const RouterView = () => {
  const location = useLocation();
  const menu = useAppSelector((state) => state.menuSlice.menu_list);

  //修改网站title
  useEffect(() => {
    const route: global_menu | undefined = menu.find(
      (u) => '/' + u.key === location.pathname,
    );
    if (route) {
      const { meta: meta } = route;
      if (meta?.title) {
        document.title = meta?.title;
      } else {
        document.title = 'admin';
      }
    }
  }, [location.pathname]);

  const routers = useRoutes([
    {
      path: '/',
      element: <Navigate to={'/welcome'} />,
    },
    {
      path: '/',
      element: <App />,
      children: [...get_routers(_.cloneDeep(menu))],
    },
    {
      path: '*',
      element: <Empty title={404} />,
    },
  ]);

  return (
    <>{menu.length === 0 && location.pathname != '/login' ? '' : routers}</>
  );
};
export default RouterView;
