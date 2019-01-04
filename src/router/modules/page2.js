import BasicCard from '@/views/Container/BasicCard';

export default [
    {
        path: 'BlankPage2',
        name: 'Page2',
        meta: {
            title: '测试2',
            icon: 'pie-chart',
        },
        component: BasicCard('Page22', true),
        children: [
            {
                path: 'Test333',
                name: 'Test333',
                meta: {
                    title: '测试23',
                    icon: 'credit-card'
                },
                component: () => import('@/views/BlankPage/Test3'),
            },
            {
                path: 'Test444',
                name: 'Test444',
                meta: {
                    title: '测试24',
                    icon: 'smile',
                },
                component: () => import('@/views/BlankPage/Test4'),
            }
        ]
    }
]
