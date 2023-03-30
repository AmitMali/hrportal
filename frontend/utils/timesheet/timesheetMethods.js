import axios from "axios";
import {DateTime} from 'luxon'
const date=new Date(),
const punchIn=async(userid)=>{
    try{
        data={
            user:userid ,
  date: DateTime.now().toUnixInteger(),
  inTime:,
  outTime:,
  duration:,
  type:,
        }
        const punchIn=await axios.post('')
    }
    catch((err)=>{
        console.log(err);
    })
}