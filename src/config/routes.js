import {createBrowserHistory} from "history";
import {routes as route_config} from "./routes_config"
import {IssueListPage} from "../pages/IssuesListPage"
import { IssuePage } from "../pages/IssuePage";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

export const history=createBrowserHistory(); 

export const routes={
    [route_config.home.id]:{
        ...route_config.home,
        component:Home
    },
    [route_config.issues.id]:{
        ...route_config.issues,
        component:IssueListPage
    },
    [route_config.issue.id]:{
        ...route_config.issue,
        component:IssuePage
    },
    [route_config.pageNotFound.id]:{
        ...route_config.pageNotFound,
        component:PageNotFound
    }
}