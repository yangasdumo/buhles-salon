import assert from 'assert';
import SalonBooking from '../salon-booking.js';
import pgPromise from 'pg-promise';

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://@localhost:5432/salon_test";

const config = {
    connectionString: DATABASE_URL
}
const pgp = pgPromise();

const db = pgp(config);

let booking = SalonBooking(db);

describe("The Booking Salon", function () {

    beforeEach(async function () {

        await db.none(`delete from booking`);

    });

    it("should be able to list services", async function () {

        const services = await booking.services();
        assert.equal(4, services);
    });

});