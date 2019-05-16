export const App = {
    namespaced: true,
    state: {
        isCreate: false,
        isManage: false,
        isFocus: false,
        atEdit: false,
        isUpdate: false,
        textAreaRef: null,
        curentId: 0,
        list: []
    },
    mutations: {
        createItem(state, payload) {
            state.list.unshift(payload.newItem)
            localStorage.setItem('noteLists', JSON.stringify(state.list))
        },
        deleteItem(state) {

        },
        updateItem(state, payload) {
            const id = payload.updateItem.id,
                  list = state.list,
                  len = list.length;
            for (let index = 0; index < len; index++) {
                if(list[index].id === id) {
                    list[index] = {
                        ...list[index],
                        ...payload.updateItem
                    }
                    break;
                }
            }
            localStorage.setItem('noteLists', JSON.stringify(list))
            state.list = list
        },
        updateStatus(state, payload) {
            for (const prop in payload) {
                state[prop] = payload[prop]
            }
        },
        readFromLocalStorage(state, payload) {
            state.list = payload.list
        },
    },
    getters: {
        getById :(state) => (id) => {
            return state.list.find(item => item.id === id)
        }
    }
}