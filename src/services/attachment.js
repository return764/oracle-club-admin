import {request,METHOD} from "@/utils/request";
import {UPLOAD, ATTACHMENTS, UPLOADS} from "@/services/api"

const attachmentApi = {}

attachmentApi.upload = (formData) => {
    return request({
        url:UPLOAD,
        method:METHOD.POST,
        data:formData,
    })
}

attachmentApi.uploads = (formData,handleProgress) => {
    return request({
        url:UPLOADS,
        method:METHOD.POST,
        onUploadProgress: (progressEvent)=>{
            if (progressEvent.lengthComputable){
                handleProgress && handleProgress(progressEvent)
            }
        },
        data:formData,
    })
}

attachmentApi.list = (params) =>{
    return request({
        url: ATTACHMENTS,
        method:METHOD.GET,
        params:params
    })
}

attachmentApi.update = (id,params) =>{
    return request({
        url:`${ATTACHMENTS}/${id}`,
        method:METHOD.PUT,
        params:params
    })
}

attachmentApi.rollback = (ids) =>{
    return request({
        url:ATTACHMENTS,
        method:METHOD.PUT,
        data: ids
    })
}

attachmentApi.deleteBatch = (data,params) =>{
    return request({
        url: ATTACHMENTS,
        method:METHOD.DELETE,
        params: params,
        data:data
    })
}

export default attachmentApi
