import request from "@/js/utils/requestTeam";

export function getTeams(pageNo,pageSize){
    console.log(pageNo)
    console.log(pageSize)
    return request({
        url:`team/findTeams/${pageNo}/${pageSize}`,
        method:'get'
    })
}
export function getTeamDetails(tid){
    return request({
        url:`team/findTeamDetails/${tid}`,
        method:'get'
    })
}