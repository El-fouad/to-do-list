export const deleteAction=(id)=>{
    return{
        type:'deleteAction',
        payload:id
    }
}

export const checkedTaskAction=(id)=>{
    return{
        type:'checkedTaskAction',
        payload:id
    }
}