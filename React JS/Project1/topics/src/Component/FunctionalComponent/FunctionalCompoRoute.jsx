import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import FunctionalComponentInReact from './01FunctionalComponentInReact.jsx';
import StateFunctionalComponentInReact from './02StateFunctionalComponentInReact.jsx';
import PropsFunctionalComponentInReact from './03PropsFunctionalComponentInReact.jsx';
import JSXFunctionalComponentInReact from './05JSXFunctionalComponentInReact.jsx';
import ControlledComponentInReact from './06ControlledComponentInReact.jsx';
import MultipleDataComponentInReact from './07MultipleDataComponentInReact.jsx';
import RestVsSpreadComponentInReact from './08RestVsSpreadComponentInReact.jsx';
import HooksInFunctionalCompo from './09HooksInFunctionalCompo.jsx';
import UseEffectHooksInFunctionalCompo from './10UseEffectHooksInFunctionalCompo.jsx';
import UseLayoutEffectHooksInFunctionalCompo from './11UseLayoutEffectHooksInFunctionalCompo.jsx';
import UseRefEffectHooksInFunctionalCompo from './12UseRefEffectHooksInFunctionalCompo.jsx';
const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu/>,
            children: [
                {
                    path: "whatisfunctionalcomponent",
                    element: <FunctionalComponentInReact />,
                }, {
                    path: "stateinfunccomp",
                    element: <StateFunctionalComponentInReact />,
                }, {
                    path: "propsinfunccomp",
                    element: <PropsFunctionalComponentInReact />,
                }, {
                    path: "jsxinfunccomp",
                    element: <JSXFunctionalComponentInReact />,
                }, {
                    path: "controlledcomponent",
                    element: <ControlledComponentInReact />,
                }, {
                    path: "controlledcomponentmultipledata",
                    element: <MultipleDataComponentInReact />,
                }, {
                    path: "restandspread",
                    element: <RestVsSpreadComponentInReact />,
                }, {
                    path: "hooksinfunctionalcompo",
                    element: <HooksInFunctionalCompo />,
                }, {
                    path: "useeffectinfunctionalcompo",
                    element: <UseEffectHooksInFunctionalCompo />,
                }, {
                    path: "uselayouteffectinfunctionalcompo",
                    element: <UseLayoutEffectHooksInFunctionalCompo />,
                }, {
                    path: "usereffectinfunctionalcompo",
                    element: <UseRefEffectHooksInFunctionalCompo />,
                },
            ]
        }])
        return routes;
}

export default ClassComponentRoute;