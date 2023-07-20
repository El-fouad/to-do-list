export const deleteAction=(id)=>{
    return{
        type:'deleteAction',
        payload:id
    }
}
export const deleteTasksAction=()=>{
    return{
        type:'deleteTasksAction',
    }
}

export const checkedTaskAction=(id)=>{
    return{
        type:'checkedTaskAction',
        payload:id
    }
}
export const addNewTask=(taskName)=>{
    return{
        type:'addNewTask',
        payload:taskName
    }
}
export const checkAllAction=()=>{
    return{
        type:'checkAllAction'
    }
}
export const unCheckAll=()=>{
    return{
        type:'unCheckAll'
    }
}