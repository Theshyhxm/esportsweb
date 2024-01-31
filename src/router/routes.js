import myIndex from "@/views/index"
import Team from "@/views/team/team.vue";
import TeamDetails from "@/views/team/team-details.vue";
import player from "@/views/player/player.vue";
import playerDetails from "@/views/player/player-details.vue";
export  const routes=[
    // {
    //     path:'/login',
    //     component:() => import('@/views/login'),
    //     hidden: true,
    // },
    {
        path: "/",
        name: "Esports",
        component: myIndex,
    },
    {
        path: "/team",
        name: "team",
        component: Team,
    },
    {
        path: "/teamDetails",
        name: "teamDetail",
        component: TeamDetails,
    },
    {
        path: "/player",
        name: "player",
        component: player,
    },
    {
        path: "/playerDetails",
        name: "playerDetails",
        component: playerDetails,
    },
]