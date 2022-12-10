import { Navigate, useRoutes } from 'react-router-dom';

// Layout
import DashboardLayout from "../Layouts";

// Components
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import ForgetPassword from '../Components/ForgetPassword';
import Dashboard from '../Components/Dashboard';
import Workspace from '../Components/Workspace/WhenNoInteraction';
import Library from '../Components/Library';
import Team from '../Components/Teams';
import Profile from '../Components/Profile';
import InternalBot from '../Components/InternalBot';
import ExternalBot from '../Components/ExternalBot';
import PageNotFound from '../Components/PageNotFound';
import BotThankYou from '../Components/BotThankYou';
import Invitation from '../Components/Form/FormInvitation/index';
import Start from '../Components/Form/FormStart/index';
import WelcomeScreen from '../Components/Form/FormWelcome/WelcomeScreen';
import Work from '../Components/Form/FormWork/Work';
import FormCheck from '../Components/Form/FormCheck/index';
import FormConfirm from '../Components/Form/FormConfirm/index';
import FormStartScreen from '../Components/Form/FormStartScreen/index';
import FormTrouble from '../Components/Form/FormTrouble/index';
import FormQuestion from '../Components/Form/FormQuestion/index';
import FormAudioRecording from '../Components/Form/FormAudioRecording/index';
import FormMcq from '../Components/Form/FormMcq/index';
import FormThankyou from '../Components/Form/FormThankyou/index';
import ViewReport from '../Components/ViewReports';
import SummaryReport from '../Components/Report/SummaryReport';
import DetailedReport from '../Components/Report/DetailedSummary';
import ViewResponse from '../Components/ViewResponses/index';
import Responses from '../Components/ViewResponses/Responses/index';
import Certificate from '../Components/Certificate';

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
                { path: "profile", element: <Profile /> },
                { path: "view-reports", element: <ViewReport /> },
                { path: "view-responses", element: <ViewResponse /> },
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
            path: "/summaryReport",
            element: <SummaryReport />
        },
        {
            path: "/detailedReport",
            element: <DetailedReport />
        },
        {
            path: "/responses",
            element: <Responses />
        },
        {
            path: "/certificate",
            element: <Certificate />
        },
        {
            path: "form",
            children: [
                {
                    path: "",
                    element: <Navigate to="/form/invitation" />
                },
                {
                    path: "invitation",
                    element: <Invitation />
                },
                {
                    path: "start",
                    element: <Start />
                },
                {
                    path: "welcome",
                    element: <WelcomeScreen />
                },
                {
                    path: "work",
                    element: <Work />
                },
                {
                    path: "check",
                    element: <FormCheck />
                },
                {
                    path: "confirm",
                    element: <FormConfirm />
                },
                {
                    path: "letStart",
                    element: <FormStartScreen />
                },
                {
                    path: "trouble",
                    element: <FormTrouble />
                },
                {
                    path: "video-question",
                    element: <FormQuestion />
                },
                {
                    path: "audio-question",
                    element: <FormAudioRecording />
                },
                {
                    path: "mcq",
                    element: <FormMcq />
                },
                {
                    path: "mcq",
                    element: <FormMcq />
                },
                {
                    path: "thankyou",
                    element: <FormThankyou />
                },
            ]
        },
        {
            path: 'form',
            element: <Navigate to="/form/invitation" />
        },
        {
            path: '*',
            element: <PageNotFound />
        },
    ])
}

export default Router;