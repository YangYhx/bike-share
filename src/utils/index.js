import * as fetch from 'axios'

export function formdata(unix){
        function fix(num) {
            return num>=10? ('' + num ): ('0'+num)

        }

        let date = new Date(unix)

        let year = date.getFullYear();
        let month = fix(date.getMonth() + 1);
        let day = fix(date.getDate());
        let hour = fix(date.getHours());
        let min = fix(date.getMinutes());
        let seconds = fix(date.getSeconds());

        let timeStr = `${year}-${month}-${day} ${hour}:${min}:${seconds}`

        return timeStr



}

const xhr = fetch.create({
    baseURL:'',
    timeout:120000
})

export const axios = {
    get(url,data,config){

    }
}

