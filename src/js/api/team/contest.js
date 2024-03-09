import request from "@/js/utils/requestTeam";

export function getContestItems(cid,pageNo,pageSize){
    console.log(pageNo)
    console.log(pageSize)
    return request({
        url:`video/findAllContestItemByContestId/${cid}/${pageNo}/${pageSize}`,
        method:'get'
    })
}
export function getVideoByCiId(ciId){
    return request({
        url:`video/getVideoByCiId/${ciId}`,
        method:'get'
    })
}