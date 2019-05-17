export const App = {
    namespaced: true,
    state: {
        isCreate: false,
        isManage: false,
        isFocus: false,
        atEdit: false,
        isUpdate: false,
        isAllChoose: false,
        curentId: 0,
        textAreaRef: null,
        footerRef: null,
        list: [
            // {
            //     id: 1,
            //     title: '记事本',
            //     content: '记事本用来记录',
            //     date: '2015/08/12',
            //     type: '备忘录'
            // }
        ],
        choosed: {}
    },
    mutations: {
        createItem(state, payload) {
            state.list.unshift(payload.newItem)
            localStorage.setItem('noteLists', JSON.stringify(state.list))
        },
        deleteItem(state, payload) {
            const choosed = state.choosed
            if(payload.id) {
                state.list = state.list.filter(item => item.id !== payload.id)
                state.choosed = {}
                localStorage.setItem('noteLists', JSON.stringify(state.list))
                return
            }
            const props = Object.keys(choosed).filter(value => choosed[value] === true)
            // const props = Object.keys(state.choosed)
            if(props.length === 0) {
                console.log('没有可以删除的项')
                return
            }
            state.list = state.list.filter(item => {
                return !props.includes(item.id)
            })
            state.choosed = {}
            localStorage.setItem('noteLists', JSON.stringify(state.list))
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
        updateChoosed(state, payload) {
            if(state.choosed[payload.id]) {
                state.choosed = {
                    ...state.choosed,
                    [payload.id]: false
                }
                // delete state.choosed[payload.id]
            } else {
                state.choosed = {
                    ...state.choosed,
                    [payload.id]: true
                }
            }
        }
    },
    getters: {
        getById :(state) => (id) => {
            return state.list.find(item => item.id === id)
        }
    }
}