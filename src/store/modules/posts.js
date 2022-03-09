

export default {
    state: {
        users:[]
    },
    getters: {
        allUsers(state){
            return state.users
        },
        allName(state){
            return state.users.length
        }
    },
    mutations: {
        updateUsers(state,users){
            state.users=users
        }
    },
    actions: {
        async fetchUsers(ctx, limit=10){
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/users?_limit='+limit
            )
            const users = await res.json()

            ctx.commit('updateUsers',users)
            // dispatch('sayHello')
            //
            // commit('updateUsers', users)
        }
    },
}
