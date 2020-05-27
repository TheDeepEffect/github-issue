

export const LOAD_ISSUES_LOADING='LOAD_ISSUES_LOADING';
export const LOAD_ISSUES_SUCCESS='LOAD_ISSUES_SUCCESS';
export const LOAD_ISSUES_ERROR='LOAD_ISSUES_ERROR';



export const isuueLoadingAction = ()=>({
    type:LOAD_ISSUES_LOADING,
    payload:true
})

export const issueLoadSuccessAction=(data)=>({
    
        type:LOAD_ISSUES_SUCCESS,
        payload:data
    

})

export const isuueLoadErrorAction=(error)=>(
    {
        type:LOAD_ISSUES_ERROR,
        payload:error
    })

