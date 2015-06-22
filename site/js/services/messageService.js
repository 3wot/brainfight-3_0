define(['./module'], function (services) {
    'use strict';
    services.factory('messageService', [function () {
        return {
            validate: function(json){
                try{
                    if('status' in json && 'message' in json, 'data' in json){ //проверка формата сообщения от сервера
                        return json;
                    }else{
                        return this.defaultError();
                    }
                }
                catch(err) {
                    return this.defaultError();
                }
            },

            defaultError: function(){
                return {
                    status: 0,
                    message: "Произошла неизвестная ошибка",
                    data: {}
                }
            }

        }
    }]);
});