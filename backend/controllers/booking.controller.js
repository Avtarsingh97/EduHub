const Razorpay = require('razorpay');
const config = require('../config');
const httpStatus = require('../util/httpStatus');
const serviceService = require('../services/service.service');
const bookingService = require('../services/booking.service');

const initiateBookingAndPayment = async(req,res)=>{
    const {dateAndTime, serviceId} = req.body;

    const service = await serviceService.getServiceById(serviceId);

    const isSlotTaken = await bookingService.isSlotAlreadyBooked({
        mentor: service.mentor,
        dateAndTime,
      });
    
      if (isSlotTaken) {
        return res.status(httpStatus.conflict).json({
          success: false,
          msg: "This slot is already booked. Please choose another time.",
        });
      }
    // Create a new booking
    const newBooking = await bookingService.createBooking({
        user : req.user._id,
        mentor : service.mentor,
        dateAndTime,
        service : serviceId,
        price : service.price,
    });
    res.status(httpStatus.created).json({
        booking: newBooking
      })
    
};



const getBookings = async(req,res)=>{
    const bookings = await bookingService.getUsersBooking(req.user._id);
    res.status(httpStatus.ok).json({
        success : true, 
        bookings
    });
};


const getMentorBookings = async(req,res)=>{
    const bookings = await bookingService.getMentorBookings(req.user._id);
    res.status(httpStatus.ok).json({
        success : true,
        bookings
    });
};


module.exports = {
    initiateBookingAndPayment,
    getBookings,
    getMentorBookings
}

