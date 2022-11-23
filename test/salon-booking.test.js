import assert from 'assert';
import SalonBooking from '../salon-booking.js';
import pgPromise from 'pg-promise';

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/salon_test";

const config = { 
	connectionString : DATABASE_URL
}
console.log(pgPromise());
const pgp = pgPromise();


const db = pgp(config);

let booking = SalonBooking(db);

describe("The Booking Salon", function () {

    beforeEach(async function () {

        await db.none(`delete from booking`);

    });

    it("should be able to list services", async function () {

        const services = await booking.findAllServices();
        assert.equal('', services);
    });

    it("should be able to login a user", async function () {

        const client = await booking.getUser("***");
        assert.equal('', client);
    });

    it("should be able to allow a client to make a booking", async function () {
        const client = await booking.getUser("***");

        const booking = await booking.booking(service, client_id, timestamp);
        const getAllBookings = await booking.getBookings();
        assert.equal([], getAllBookings);
    });

    it("should be able to get client booking(s)", async function () {
        const client1 = await booking.getUser("***");
        const client2 = await booking.getUser("***");

        const booking1 = await booking.booking(service, client1_id, timestamp);
        const booking2 = await booking.booking(service, client1_id, timestamp);
        const booking3 = await booking.booking(service, client2_id, timestamp);

        const clientBooking = await booking.getClientBooking(client);

        assert.equal([], clientBooking)
    })

    it("should be able to get bookings for a date", async function () {
        const client1 = await booking.getUser("***");
        const client2 = await booking.getUser("***");

        const booking1 = await booking.booking(service, client1_id, timestamp);
        const booking2 = await booking.booking(service, client1_id, timestamp);
        const booking3 = await booking.booking(service, client2_id, timestamp);

        const BookingDate = await booking.getBookingByDate(date);

        assert.equal([], clientBooking)
    })

    after(function () {
        db.$pool.end()
    });

});