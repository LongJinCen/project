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
        list: [{
            id: 1,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 2,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 3,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 4,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 5,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 6,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 7,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 8,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 9,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 10,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 11,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 12,
            title: '隆金岑',
            type: '备忘录',
            content: '这里是内容',
            date: '2019/05/15'
        }, {
            id: 13,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 14,
            title: '隆金岑',
            content: '这里是内容',
            type: '备忘录',
            date: '2019/05/15'
        }, {
            id: 15,
            title: '隆金岑',
            type: '备忘录',
            content: '这里是内容',
            date: '2019/05/15'
        }, {
            id: 16,
            title: '隆金岑',
            type: '备忘录',
            content: '这里是内容',
            date: '2019/05/15'
        }]
    },
    mutations: {
        createItem(state, payload) {
            state.list.unshift(payload.newItem)
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
            state.list = list
        },
        updateStatus(state, payload) {
            for (const prop in payload) {
                state[prop] = payload[prop]
            }
        }
    },
    actions: {
        createItem({ state, commit }) {

        },
        deleteItem({ state, commit }) {

        },
        updateItem({ state, commit }) {

        },
    },
    getters: {
        getById :(state) => (id) => {
            return state.list.find(item => item.id = id)
        }
    }
}