import Resume from '../pages/resume/resume';
import Blog from '../pages/blog/blog';
import Detail from '../pages/blog/detail';

const routers = [{
    path: '/',
    exact: true,
    component: Resume
}, {
    path: '/blog',
    exact: true,
    component: Blog,
}, {
    path: '/detail/:id',
    exact: true,
    component: Detail,
}];

export default routers;