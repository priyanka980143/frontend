import ReactDOM from 'react-dom/client';
// import componentExample from './myfile.jsx';
import ComponentExample from './myfile.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './custom.css';
import routes from "./Router/MainRouter.jsx"
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);
