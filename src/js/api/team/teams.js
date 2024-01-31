import request from "@/js/utils/request";

export function getTeams(pageNo,pageSize){
    return request({
        url:`/team/findTeams/${pageNo}/${pageSize}`,
        method:'get'
    })
}