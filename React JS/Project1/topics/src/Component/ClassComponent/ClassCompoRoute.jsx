import { useRoutes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ComponentInReact from './01ComponentInReact.jsx';
import ClassComponentInReact from './02ClassComponentInReact.jsx';
import StateClassComponentInReact from './03StateClassComponentInReact.jsx';
import ConditionalRenderingClassComponentInReact from './04ConditionalRenderingClassComponentInReact.jsx';
import PropsClassComponentInReact from './05PropsClassComponentInReact.jsx';
import LifecycleClassComponentInReact from './06LifecycleClassComponentInReact.jsx';
const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu/>,
            children: [
                {
                    path: "whatiscomponent",
                    element: <ComponentInReact />,
                }, {
                    path: "classcomponent",
                    element: <ClassComponentInReact />,
                }, {
                    path: "stateclasscomponent",
                    element: <StateClassComponentInReact />,
                }, {
                    path: "conditionalrenderclasscomponent",
                    element: <ConditionalRenderingClassComponentInReact />,
                }, {
                    path: "propsclasscomponent",
                    element: <PropsClassComponentInReact />,
                }, {
                    path: "lifecycle",
                    element: <LifecycleClassComponentInReact />,
                }
            ]
        }])
        return routes;
}

export default ClassComponentRoute;