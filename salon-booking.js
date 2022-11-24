module.exports = function salonBooking(db) {
    
    async function findTreatment(code) {
        return await db.oneOrNone("select * from treatment where code = $1", [code])
    }
    
    
    async function findAllBookings(date, time) {
        if(date && !time){
            return await db.any("select* from booking where booking_date = $1", [date])
        }
        return await db.any("select * from booking where booking_date = $1 AND booking_time = $2", [date, time])
    }
    
    
    async function findClientBookings(clientId) {
        return await db.any("select* from booking where client_id = $1", [clientId])
    }
    
    async function findAllTreatments() {
        return await db.any("select * from treatment")
    }
    
    
    async function findStylist(number) {
        return await db.oneOrNone("select* from stylist where phone_number = $1", [number])
    }

    
    async function findClient(number) {
        return await db.oneOrNone("SELECT * from client where phone_number = $1", [number])
    }

   

    async function totalDAy(){
        let getTotal = await db.oneOrNone("select sum (amount) AS total_income  from booking")
        return getTotal.total
    }
      
    
    return {
    findAllTreatments,
    findClient,
    findAllBookings,
    totalDAy,
    findStylist,
    findTreatment,
    findClientBookings,
    }
}  