import moment from 'moment';

export const dateTimePass =(dateTime:String)=>{
    // @ts-ignore
    const date = moment(dateTime)
    const dayPass = moment().diff(date,'day')
    if(dayPass<1){
        return 'วันนี้'
    }else if(dayPass<7){
        return `${dayPass} วันที่ผ่านมา`
    }else{
        return date.format("DD-MMM-YYYY")
    }
}