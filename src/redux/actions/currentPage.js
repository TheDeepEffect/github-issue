export const CURRENT_PAGE='CURRENT_PAGE';

export const setCurrentPageAction = (page)=>{
    const pageNum=parseInt(page);
    return{
        type:CURRENT_PAGE,
        payload:pageNum
    }
}