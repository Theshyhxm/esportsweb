export  const routes=[
    {
        path:'/login',
        component:() => import('@/views/login'),
        hidden: true,
    },
    {
        path:'/index',
        name:"Esports",
        component:() => import('@/views/index'),
    }
]