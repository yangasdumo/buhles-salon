# buhles-salon

Create 4 tables: 

* client, 
* services, 
* booking 
* stylins. 

## Table structure

* client 
    - username
    - code

* service 
    - service_type
    - price

* booking  
    - booking_date
    - booking_time
    - client_id
    - service_id
    - stylist_id

* stylist 
    - first_name
    - last_name
    - commission_percentage
        

The `booking` table brings `client` , `services` and `stylist` together.

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



Service type   | Price | Stylist commission
-------------  | ------|----------
`Pedicure`      |  R130 |   25%        
`Manicure` 	    |  R80    | 25%     
`Make up ` 	     |  R250   | 25%  
`Brows & Lashes` | 	 160   | 25%   
  
## Barber

Service type   | Price | Stylist commission
-------------  | -------|-----------
`Buzz cut`      |  R35 |   25%        
`Scissor cut` 	|  R30    | 25%     
`Beard trim` 	|  R25  | 25%  

 Each service type have a stylist that specialise in that service. For each service that the stylist performs there's a commision percentage that goes to them.   

# Methods with aggregate function still needs reviewing 
function                    | descriptions     
----------------------------|-----------------
FindTheTotalIncomeForBarber | find the total in come for a barber
calculateTotalIncomeForSalon| calculate total income for the salon
calcatulateTotalIncomeFormAllMoningBookkings| calculate the total income for all moning bookings




 


