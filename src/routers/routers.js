import Resume from '../pages/resume/resume';
import Blog from '../pages/blog/blog';

const routers = [{
    path: '/',
    exact: true,
    component: Resume
}, {
    path: '/blog',
    exact: true,
    component: Blog
}];

export default routers;