# Buhles salon

Buhle has started a salon in her local shopping centre and needs a new system to keep track of her business. She is currently offers 4 different treatments in her salon `Pedicure`, `Manicure`, `Make up` & `Brows & Lashes`.

Create a Factory Function and a database for a Web App that will help her keep track of treatments & bookings.

Create 4 tables: 

* client, 
* treatment, 
* booking 
* stylist 

## Table structure

* client 
    - username
    - code

* treatment 
    - type
    - price

* booking  
    - booking_date  -> use `date` type
    - booking_time  -> use `time` type
    - client_id 
    - treatment_id    
    - stylist_id

* stylist 
    - first_name
    - last_name
    - commission_percentage
        

The `booking` table brings `client` , `treatment` and `stylist` tables together.

## Factory Function

Create a Factory Function called `salonBooking` with the following methods:

Function name            | Description   
------------------------ | ---------------
`getUser` 		 | Allow a client to login with code              
`findAllServices` 		     |  Return all the services            
`booking` 	     |  Allow a client to make a booking - a booking require a clientId, serviceId, date & a time. Only 2 max bookings for a serviceId in a given timeslot is allowed.
`findAllBookings` 	 |  Find all the bookings that were made
`findClientBookings` 	     |  Find all the booking - use clientId as lookup
`findAllBookings({date, time})`    |   Find all the booking made for a specific date & time combination - if only date or time is specified query for only date or time which ever one is specified. If both is specified query for both if no variables are specified return all bookings

We made a start for you by creating the `salon-booking.js` file with some tests in `salon-booking.test.js`.

Make all the tests pass with, your data in the database, in `salon-booking.test.js` use the appropriate parameters and return data. The tests are not setup using specific data. You need to make sure each test tests the appropriate things.


# Methods with aggregate function still needs reviewing 
function                    | descriptions     
----------------------------|-----------------
`totalIncome()` | find the total income foe the salon so far.
`totalIncomeForDay(date)` | find the total income for the salon so far day specofied.
`totalIncomeForMoningBookkings(date)`| calculate the total income for all moning bookings for a specified date. Morning bookings are bookings before 12h00.


Service type   | Price  
-------------  | ------
`Pedicure`      |  R130 
`Manicure` 	    |  R
`Make up ` 	     |  R250.00 
`Brows & Lashes` | 	 R160.00
  
 Each service type have a stylist that specialise in that service. For each service that the stylist performs there's a commision percentage that goes to them.   
