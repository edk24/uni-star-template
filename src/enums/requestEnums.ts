export enum ContentTypeEnum {
    JSON = 'application/json;charset=UTF-8'
};

export enum RequestMethodsEnum {
    GET = 'GET',
    POST ='POST',
    DELETE ='DELETE',
    PUT = 'PUT'
};


export enum RequestCodeEnum {
    SUCCESS = 0, //成功
    FAILED = 1, // 失败
    TOKEN_INVALID = 4001 // TOKEN失效未登录
};

export enum RequestErrMsgEnum {
    ABORT = 'request:fail abort',
    TIMEOUT = 'request:fail timeout'
};