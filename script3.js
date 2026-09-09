const prompt = require("prompt-sync")();

// =================================
// DATA
// =================================

const trips = [
   {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];

let nextTicketId = 1;


// =================================
// 1. AFFICHER LES TRAJETS
// =================================

function displayTrips() {

    console.log("\n=================================");
    console.log("       TRAJETS DISPONIBLES");
    console.log("=================================");

    for (let i = 0; i < trips.length; i++) {

        const trip = trips[i];

        console.log(`\n#${trip.id} ${trip.departure} → ${trip.destination}`);
        console.log(`Départ : ${trip.departureTime}`);
        console.log(`Arrivée : ${trip.arrivalTime}`);
        console.log(`Prix : ${trip.price} DH`);
        console.log(`Places disponibles : ${trip.availableSeats}`);
    }

    console.log("\n=================================\n");
}


// =================================
// 2. ACHETER UN TICKET
// =================================

function buyTicket() {

    console.log("\n=================================");
    console.log("          ACHETER UN TICKET");
    console.log("=================================");

    const passengerName = prompt("Nom du passager : ");

    const tripId = parseInt(
        prompt("Identifiant du trajet : ")
    );

    // Chercher le trajet
    const trip = trips.find(function (trip) {
        return trip.id === tripId;
    });

    // Vérifier si le trajet existe
    if (!trip) {

        console.log("Trajet introuvable.");

        return;
    }

    // Vérifier les places
    if (trip.availableSeats <= 0) {

        console.log("Train complet.");

        return;
    }

    // Numéro de place
    const seatNumber = 51 - trip.availableSeats;

    // Créer le ticket
    const ticket = {
        id: nextTicketId,
        passengerName: passengerName,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    // Ajouter le ticket
    tickets.push(ticket);

    // Diminuer les places
    trip.availableSeats--;

    // Augmenter l'ID pour le prochain ticket
    nextTicketId++;

    console.log("\nTicket acheté avec succès.");

    console.log(`Ticket #${ticket.id}`);
    console.log(`Passager : ${ticket.passengerName}`);
    console.log(
        `Trajet : ${trip.departure} → ${trip.destination}`
    );
    console.log(`Place : ${ticket.seatNumber}`);
    console.log(`Prix : ${ticket.price} DH`);
}


// =================================
// 3. AFFICHER LES TICKETS
// =================================

function displayTickets() {

    console.log("\n=================================");
    console.log("             TICKETS");
    console.log("=================================");

    if (tickets.length === 0) {

        console.log("Aucun ticket enregistré.");

        return;
    }

    for (let i = 0; i < tickets.length; i++) {

        const ticket = tickets[i];

        const trip = trips.find(function (trip) {
            return trip.id === ticket.tripId;
        });

        console.log(`\nTicket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(
            `Trajet : ${trip.departure} → ${trip.destination}`
        );
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);
    }

    console.log("\n=================================\n");
}


// =================================
// 4. ANNULER UN TICKET
// =================================

function cancelTicket() {

    console.log("\n=================================");
    console.log("          ANNULER UN TICKET");
    console.log("=================================");

    const ticketId = parseInt(
        prompt("Identifiant du ticket : ")
    );

    // Chercher l'index du ticket
    const ticketIndex = tickets.findIndex(function (ticket) {
        return ticket.id === ticketId;
    });

    // Ticket introuvable
    if (ticketIndex === -1) {

        console.log("Ticket introuvable.");

        return;
    }

    // Récupérer le ticket
    const ticket = tickets[ticketIndex];

    // Trouver le trajet
    const trip = trips.find(function (trip) {
        return trip.id === ticket.tripId;
    });

    // Supprimer le ticket
    tickets.splice(ticketIndex, 1);

    // Libérer une place
    trip.availableSeats++;

    console.log("Ticket annulé avec succès.");
}


// =================================
// 5. RECHERCHER UN TICKET
// =================================

function searchTicket() {

    console.log("\n=================================");
    console.log("         RECHERCHER UN TICKET");
    console.log("=================================");

    const passengerName = prompt("Nom du passager : ");

    const results = tickets.filter(function (ticket) {

        return ticket.passengerName.toLowerCase()
            .includes(passengerName.toLowerCase());

    });

    if (results.length === 0) {

        console.log("Aucun ticket trouvé.");

        return;
    }

    console.log("\n=== RÉSULTATS ===");

    for (let i = 0; i < results.length; i++) {

        const ticket = results[i];

        const trip = trips.find(function (trip) {
            return trip.id === ticket.tripId;
        });

        console.log(`\nTicket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(
            `Trajet : ${trip.departure} → ${trip.destination}`
        );
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);
    }
}


// =================================
// 6. FILTRER LES TRAJETS
// =================================

function filterTrips() {

    console.log("\n=================================");
    console.log("          FILTRER LES TRAJETS");
    console.log("=================================");

    const departure = prompt("Ville de départ : ");

    const results = trips.filter(function (trip) {

        return trip.departure.toLowerCase()
            .includes(departure.toLowerCase());

    });

    if (results.length === 0) {

        console.log("Aucun trajet trouvé.");

        return;
    }

    console.log("\n=== RÉSULTATS ===");

    for (let i = 0; i < results.length; i++) {

        const trip = results[i];

        console.log(
            `${trip.departure} → ${trip.destination} : ${trip.price} DH`
        );
    }
}


// =================================
// 7. TRIER LES TRAJETS
// =================================

function sortTrips() {

    console.log("\n=================================");
    console.log("          TRIER LES TRAJETS");
    console.log("=================================");

    // Copie du tableau pour ne pas modifier trips
    const sortedTrips = [...trips];

    // Tri par prix croissant
    sortedTrips.sort(function (a, b) {

        return a.price - b.price;

    });

    console.log("\n=== TRAJETS TRIÉS PAR PRIX ===");

    for (let i = 0; i < sortedTrips.length; i++) {

        const trip = sortedTrips[i];

        console.log(
            `${trip.departure} → ${trip.destination} : ${trip.price} DH`
        );
    }
}


// =================================
// MENU PRINCIPAL
// =================================

function showMenu() {

    console.log("\n=================================");
    console.log("          RAILWAY MANAGER");
    console.log("=================================");

    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");

    console.log("=================================");
}


// =================================
// PROGRAMME PRINCIPAL
// =================================

let choice;

while (choice !== "0") {

    showMenu();

    choice = prompt("Votre choix : ");

    switch (choice) {

        case "1":
            displayTrips();
            break;

        case "2":
            buyTicket();
            break;

        case "3":
            displayTickets();
            break;

        case "4":
            cancelTicket();
            break;

        case "5":
            searchTicket();
            break;

        case "6":
            filterTrips();
            break;

        case "7":
            sortTrips();
            break;

        case "8":
            statistics();
            break;

        case "0":
            console.log("\nMerci d'avoir utilisé Railway Manager !");
            break;

        default:
            console.log("\nChoix invalide. Veuillez choisir entre 0 et 8.");
    }

    if (choice !== "0") {

        prompt("\nAppuyez sur Entrée pour revenir au menu...");
    }
}