import AxiosInstances from ".";
import axios from 'axios';


const bookService = async(data)=>{
    return await AxiosInstances.post('/booking/initiate-booking',data);
};

const getMentorBookings = async()=>{
    return await AxiosInstances.get('/booking/mentor');
};

const getStudentBookings = async()=>{
    return await AxiosInstances.get('/booking');
};

const getBookingsByUsername = async(username)=>{
   
    
    return await AxiosInstances.get(`/booking/getBookings/${username}`)
}

const updateBooking= async(bookingData)=>{
    
    
    
    return await AxiosInstances.post('/booking/updateBooking', bookingData)
}

const checkTimeConflict= async(data)=>{
    return await AxiosInstances.post('/booking/checkConflict', data)
}


const rescheduleBooking= async(bookingData)=>{
  
    
    return await AxiosInstances.patch('/booking/rescheduleSlot', bookingData)
}

const cancelBooking= async(bookingId)=>{

   
    return await AxiosInstances.patch('/booking/cancelBooking', bookingId)
    
}
const completeBooking= async(bookingId)=>{

   return await AxiosInstances.patch("/booking/completeBooking",bookingId)
}
export default {
    bookService,
    getMentorBookings,
    getStudentBookings,
    getBookingsByUsername,
    updateBooking,
    checkTimeConflict,
    rescheduleBooking,
    cancelBooking,
    completeBooking
}