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
import UseCallbackHooksInFunctionalCompo from './13UseCallbackHooksInFunctionalCompo.jsx';
import UseMemoHooksInFunctionalCompo from './14UseMemoHooksInFunctionalCompo.jsx';
import StateLiftingInFunctionalCompo from './15StateLiftingInFunctionalCompo.jsx';
import FunctionalImperativeHandle from './17ImperativeHandle/13FunctionalImperativeHandle.jsx';
import HoneyCom from './18HoneyCom/ParentCompo.jsx';
import UseContextHookInFunctionalCompo from './19UseContextHook/MainCompo.jsx';
import UseReducerHookInFunctionalCompo from './20UseReducerHookInFunctionalCompo.jsx';
import UseContextHookExampleInFunctionalCompo from './19UseContextHook/UseContextExmapleRef/12FunctionalUseContext.jsx';


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
                {
                    path: "usecallbackinfunctionalcompo",
                    element: <UseCallbackHooksInFunctionalCompo />,
                }, {
                    path: "usememoinfunctionalcompo",
                    element: <UseMemoHooksInFunctionalCompo />,
                },
                {
                    path: "stateliftinginfunctionalcompo",
                    element: <StateLiftingInFunctionalCompo />,
                }, 
                {
                    path: "useimperativehandleinfunctionalcompo",
                    element: <FunctionalImperativeHandle />,
                }, 
                {
                    path: "honeycom",
                    element: <HoneyCom />,
                },

                {
                    path: "usecontext",
                    element: <UseContextHookInFunctionalCompo />,
                }, {
                    path: "usecontextexample",
                    element: <UseContextHookExampleInFunctionalCompo />,
                }, {
                    path: "usereducer",
                    element: <UseReducerHookInFunctionalCompo />,
                },

            ]
        }])
        return routes;
}

export default ClassComponentRoute;