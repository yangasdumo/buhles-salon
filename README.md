# buhles-salon

Create 4 tables: 

* Client, 
* Services, 
* Booking 
* Stylins. 

## Table structure

* Client 
    - username
    - code

* Service 
    - serviceType
    - price

* Booking  
    - Date
    - Time
    - Client_id
    - service_id
    - Stylist_id

* Stylist 
    - commission percentage
    - Types of service    

The `Booking` table brings `client` and `services` and `stylist` together.

## Factory Function

Create a Factory Function called `salonBooking` with the following methods:

Function name            | Description   
------------------------ | ---------------
`getUser` 		 | Allow a client to login with code              
`findAllServices` 		     |  Return all the services            
`booking` 	     |  Allow a client to make a booking
`findAllBookings` 	 |  Find all the bookings that were made
`findClientBookings` 	     |  Find all the booking - use client_id as lookup
`findAllBookingsForDate(date)`    |   Find all the booking made for a specific date

We made a start for you by creating the `salon-booking.js` file with some tests in `salon-booking.test.js`.

Make all the tests pass with, your data in the database, in `salon-booking.test.js` use the appropriate parameters and return data. The tests are not setup using specific data. You need to make sure each test tests the appropriate things.
