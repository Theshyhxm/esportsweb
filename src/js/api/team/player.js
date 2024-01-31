import request from "@/js/utils/requestTeam";

export function getPlayers(pageNo,pageSize){
    console.log(pageNo)
    console.log(pageSize)
    return request({
        url:`team/findMerbers/${pageNo}/${pageSize}`,
        method:'get'
    })
}
export function getPlayerDetails(mid){
    return request({
        url:`team/findMerberDetails/${mid}`,
        method:'get'
    })
}