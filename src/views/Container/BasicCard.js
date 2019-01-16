import { mapGetters } from 'vuex';

export default (name, bool) => () => Promise.resolve({
    name,
    render (h) {
        const keepAlive = h('KeepAlive',
            {
                props: { include: this.getAlive(name) }
            },
            [
                h('RouterView')
            ]
        );
        return h('ACard',
            {
                props: {
                    title: this.$route.meta.title
                }
            },
            [
                bool ? keepAlive : h('RouterView')
            ]
        );
    },
    computed: {
        ...mapGetters('app', ['getAlive'])
    }
})
