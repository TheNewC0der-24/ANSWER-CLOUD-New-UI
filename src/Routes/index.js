import { Navigate, useRoutes } from 'react-router-dom';

// Layout
import DashboardLayout from "../Layouts";

// Components
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import ForgetPassword from '../Components/ForgetPassword';
import Dashboard from '../Components/Dashboard';
import Workspace from '../Components/Workspace';
import Library from '../Components/Library';
import Team from '../Components/Teams';
import Profile from '../Components/Profile';
import InternalBot from '../Components/InternalBot';
import ExternalBot from '../Components/ExternalBot';
import Form from '../Components/Form';
import PageNotFound from '../Components/PageNotFound';
import BotThankYou from '../Components/BotThankYou';
import ViewResponse from '../Components/ViewResponse';

const Router = () => {

    return useRoutes([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: 'auth',
            children: [
                {
                    path: "",
                    element: <Navigate to="/auth/login" />
                },
                {
                    path: "login",
                    element: (<Login />)
                }
            ]
        },
        {
            path: 'login',
            element: <Navigate to="/auth/login" />
        },
        {
            path: "forget-password",
            element: <ForgetPassword />
        },
        {
            path: 'register',
            element: <SignUp />
        },
        {
            path: 'account',
            element: <DashboardLayout />,
            children: [
                { path: "", element: <Navigate to="/account/dashboard" /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "workspace", element: <Workspace /> },
                { path: "internal-bot", element: <InternalBot /> },
                { path: "external-bot", element: <ExternalBot /> },
                { path: "library", element: <Library /> },
                { path: "teams", element: <Team /> },
                { path: "responses", element: <ViewResponse /> },
                { path: "profile", element: <Profile /> },
            ]
        },
        {
            path: 'dashboard',
            element: <Navigate to="/account/dashboard" />
        },
        {
            path: "thank-you",
            element: <BotThankYou />
        },
        {
            path: "form",
            children: [
                {
                    path: "",
                    element: <Navigate to="/form/start" />
                },
                {
                    path: "start",
                    element: <Form />
                }
            ]
        },
        {
            path: '*',
            element: <PageNotFound />
        },
    ])
}

export default Router;