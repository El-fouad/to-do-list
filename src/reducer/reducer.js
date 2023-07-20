import { DataTasks } from "../data";

const Reducer = (state = DataTasks, action) => {
  switch (action.type) {
    case "deleteAction":
      console.log(action.payload);
      return state.filter((ts) => ts.id != action.payload);
    case "checkedTaskAction":
      console.log(action.payload);
      return state.map((ts) =>
        ts.id == action.payload ? { ...ts, status: !ts.status } : ts
      );

    default:
      return state;
  }
};
export default Reducer;
