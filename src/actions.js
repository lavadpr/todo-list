export const addItem = (item) => {
    return {type: "ADD_ITEM", payload: item};
}
export const changeDone = (id) => {
    return { type: "CHANGE_DONE", payload: id };
}
export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", payload: id };
}