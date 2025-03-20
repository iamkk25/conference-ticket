// const generatedTickets = new Set();

export function generateRandomNumber(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ticketIdGenerator() {
    let ticketId = '';

    for (let _ = 1; _ <= 6; _++) {
        ticketId += generateRandomNumber();
    }

    // ticketId = generateRandomNumber(3, 9);

    // if (generatedTickets.has(ticketId)) {
    //     return ticketIdGenerator();
    // } else {
    //     generatedTickets.add(ticketId);
    // }

    return ticketId;
}

// console.log(ticketIdGenerator());
// console.log(generatedTickets);

// class Ticket {
//     #generatedTickets = new Set();
//     #maxSize = 1;

//     constructor(maxsize) {
//         this.ticketId = '';
//         this.#maxSize = maxsize;
//         console.log(this.#maxSize);
//     }

//     generateId = () => {
//         // for (let _ = 1; _ <= 6; _++) {
//         //     ticketId += generateRandomNumber();
//         // }
//         const ticket = generateRandomNumber();

//         if (this.#generatedTickets.size === this.#maxSize) {
//             console.error(`Error: Unable to generate a new ticket. The maximum number of unique tickets (${this.#maxSize}) has been reached.`)
//             return;
//         }

//         if (this.#generatedTickets.has(ticket)) {
//             return this.generateId();
//         } else {
//             this.#generatedTickets.add(ticket);
//         }

//         this.ticketId = ticket;
//     }

//     getCachedTicketIds = () => {
//         return this.#generatedTickets;
//     }
// }

// const ticket = new Ticket(4);
// console.log(ticket)

// ticket.generateId();
// console.log(`Generated ticket: ${ticket.ticketId}`);
// console.log(`Ticket Cache: ${ticket.getCachedTicketIds().size}`)

export function formatDate(date) {
    const intl = new Intl.DateTimeFormat('en-IN', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
    return intl.format(date);
}