# Buhles salon

Buhle has started a salon in her local shopping centre and needs a new system to keep track of her business. She currently offers 4 different treatments in her salon `Pedicure`, `Manicure`, `Make up` & `Brows & Lashes`.

All stylists can do all treatments.

The treatment prices are as follows.

Service type   | Price  
-------------  | ------
`Pedicure`      |  R175 
`Manicure` 	    |  R215
`Make up ` 	     |  R185.00 
`Brows & Lashes` | 	 R160.00



Create a Factory Function and a database that will help her keep track of treatment bookings.

## Tables to create

Create these 4 tables: 

* client, 
* treatment, 
* booking 
* stylist 

## Table structure

All columns have an `id` as primary key

* client 
   - first_name
   - last_name
   - phone_number

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
    - phone_number
    - commission_percentage
        

The `booking` table brings `client` , `treatment` and `stylist` tables together.

## Factory Function

Create a Factory Function called `salonBooking` with the following methods:

Function name            | Description   
------------------------ | ---------------
`getStylist(phoneNumbrt)` 		 | Find all data for stylist by their phone number              
`findAllServices()` 		     |  Return all the services offered
`findStylistsForTreatment()` | Return all the stylists that ever given this treatment, use the booking table. 
`makeBooking` |  Allow a client to make a booking - a booking require a clientId, serviceId, date & a time. Only 2 bookings max for a serviceId in a given timeslot & date combination is allowed.
`findAllBookings` |  Find all the bookings that were made
`findClientBookings(clientId)`  |  Find all the bookings for a client - use clientId as lookup
`findAllBookings({date, time})` |   Find all the booking made for a specific date & time combination - if only date or time is specified query for only date or time which ever one is specified. If both is specified query for both if no variables are specified return all bookings
`totalIncome()` | find the total incomr foe the salon so far.
`totalIncomeForDay(date)` | find the total income for the day specified.
`mostValuebleClient` | find the client that spend the most money at the salon
`totalIncomeForMorningBookings(date)`| calculate the total income for all morning bookings for a specified date. Morning bookings are bookings before 12h00.

## Factory function setup

We made a start for you by creating the `salon-booking.js` factory function file with some tests in `salon-booking.test.js`.

Make all the tests pass with, your data in the database, in `salon-booking.test.js` use the appropriate parameters and return data. The tests are not setup using specific data. You need to make sure each test tests the appropriate thing.

Ensure the tests are running in **GitHub actions**.

Add all your sql scripts to a `sql` folder.


