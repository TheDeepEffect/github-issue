export const routes={
    home:{
        id:'home',
        name:"Home",
        description:'Home page',
        path:'/',
        path_string:()=>('/'),
        exact: true,
		component: undefined,
    },
    issues:{
        id:'issues',
        name:'Issues',
        description:'Issues list page',
        path:'/issues/:page',
        path_string:(params)=>{
            const {page}=params;
            return `/issues/${page}`;

        },
        exact: true,
		component: undefined,

    },
    issue:{
        id:'issue',
        name:'Single issue',
        description:'Issues page',
        path:'/issues/issue/:issue_id',
        path_string:(params)=>{
            const {issue_id}=params;
            return `/issues/issue/${issue_id}`;

        },
        exact: true,
		component: undefined,

    },
    pageNotFound:{
        id:'pageNotFound',
        name:'404 no page found',
        description:"Error page",
        component:undefined
    }

}