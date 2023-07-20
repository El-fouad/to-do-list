import { DataTasks } from "../data";

const Reducer = (state = DataTasks, action) => {
  switch (action.type) {
    
    case "deleteAction":
      return state.filter((ts) => ts.id != action.payload);

    case "deleteTasksAction":
      return state.filter((ts) => !ts.status);

    case "checkedTaskAction":
      return state.map((ts) =>
        ts.id == action.payload ? { ...ts, status: !ts.status } : ts
      );

    case "checkAllAction":
      console.log("hello ffrom checkall ");
      return state.map((ts) => ({ ...ts, status: true }));

    case "unCheckAll":
      console.log("hello ffrom uncheckall ");
      return state.map((ts) => ({ ...ts, status: false }));

    case "addNewTask":
      return [
        ...state,
        { id: state.length + 1, title: action.payload, status: false },
      ];

    default:
      return state;
  }
};
export default Reducer;
