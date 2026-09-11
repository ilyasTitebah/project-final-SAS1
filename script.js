const prompt = require("prompt-sync")();
const tickets = [];
let choix;
const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "07:30",
    arrivalTime: "08:30",
    price: 25,
    availableSeats: 50,
  },
  {
    id: 2,
    departure: "Safi",
    destination: "Marrakech",
    departureTime: "08:00",
    arrivalTime: "10:30",
    price: 90,
    availableSeats: 50,
  },
  {
    id: 3,
    departure: "Safi",
    destination: "Casablanca",
    departureTime: "09:00",
    arrivalTime: "13:00",
    price: 140,
    availableSeats: 50,
  },
  {
    id: 4,
    departure: "Youssoufia",
    destination: "Marrakech",
    departureTime: "09:15",
    arrivalTime: "11:00",
    price: 65,
    availableSeats: 50,
  },
  {
    id: 5,
    departure: "Youssoufia",
    destination: "Casablanca",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 110,
    availableSeats: 50,
  },
  {
    id: 6,
    departure: "Marrakech",
    destination: "Casablanca",
    departureTime: "11:30",
    arrivalTime: "14:30",
    price: 120,
    availableSeats: 50,
  },
  {
    id: 7,
    departure: "Marrakech",
    destination: "Rabat",
    departureTime: "12:00",
    arrivalTime: "16:00",
    price: 150,
    availableSeats: 50,
  },
  {
    id: 8,
    departure: "Casablanca",
    destination: "Rabat",
    departureTime: "14:00",
    arrivalTime: "15:15",
    price: 40,
    availableSeats: 50,
  },
  {
    id: 9,
    departure: "Casablanca",
    destination: "Kenitra",
    departureTime: "15:00",
    arrivalTime: "16:45",
    price: 55,
    availableSeats: 50,
  },
  {
    id: 10,
    departure: "Rabat",
    destination: "Kenitra",
    departureTime: "16:00",
    arrivalTime: "16:45",
    price: 30,
    availableSeats: 50,
  },
  {
    id: 11,
    departure: "Rabat",
    destination: "Fes",
    departureTime: "17:00",
    arrivalTime: "19:30",
    price: 95,
    availableSeats: 50,
  },
  {
    id: 12,
    departure: "Kenitra",
    destination: "Fes",
    departureTime: "17:30",
    arrivalTime: "20:00",
    price: 85,
    availableSeats: 50,
  },
  {
    id: 13,
    departure: "Fes",
    destination: "Meknes",
    departureTime: "08:30",
    arrivalTime: "09:20",
    price: 35,
    availableSeats: 50,
  },
  {
    id: 14,
    departure: "Fes",
    destination: "Oujda",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 130,
    availableSeats: 50,
  },
  {
    id: 15,
    departure: "Meknes",
    destination: "Rabat",
    departureTime: "11:00",
    arrivalTime: "13:30",
    price: 80,
    availableSeats: 50,
  },
  {
    id: 16,
    departure: "Meknes",
    destination: "Casablanca",
    departureTime: "12:00",
    arrivalTime: "15:00",
    price: 105,
    availableSeats: 50,
  },
  {
    id: 17,
    departure: "Casablanca",
    destination: "El Jadida",
    departureTime: "16:30",
    arrivalTime: "18:00",
    price: 50,
    availableSeats: 50,
  },
  {
    id: 18,
    departure: "El Jadida",
    destination: "Safi",
    departureTime: "18:30",
    arrivalTime: "20:30",
    price: 60,
    availableSeats: 50,
  },
  {
    id: 19,
    departure: "Marrakech",
    destination: "Agadir",
    departureTime: "15:00",
    arrivalTime: "18:30",
    price: 100,
    availableSeats: 50,
  },
  {
    id: 20,
    departure: "Agadir",
    destination: "Safi",
    departureTime: "19:00",
    arrivalTime: "22:00",
    price: 95,
    availableSeats: 50,
  },
];

do {
  console.log("=================================");
  console.log("        RAILWAY MANAGER          ");
  console.log("=================================");
  console.log("1. Afficher les trajets");
  console.log("2. Acheter un ticket");
  console.log("3. Afficher les tickets");
  console.log("4. Annuler un ticket");
  console.log("5. Rechercher un ticket");
  console.log("6. Filtrer les trajets");
  console.log("7. Trier les trajets");
  console.log("0.Quitter");
  console.log("----------------------------------");
  choix = parseInt(prompt("ecrit votre choix : "));
  switch (choix) {
    case 1:
      afficherTrajet();
      break;
    case 2:
      acheterTickets();
      break;
    case 3:
      AfficherTickets();
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      trierTrajets();
      break;
    case 0:
      console.log("-- au revoir --");
      break;
    default:
      console.log("entrer un nombre valid!");
      break;
  }
} while (choix != 0);

function afficherTrajet() {
  console.log("\n\n=== TRAJETS DISPONIBLES === \n");
  for (let i = 0; i < trips.length; i++) {
    console.log(
      `#${trips[i].id} ${trips[i].departure} --> ${trips[i].destination}`,
    );
    console.log(`depart: ${trips[i].departureTime}`);
    console.log(`arrivee: ${trips[i].arrivalTime}`);
    console.log(`prix: ${trips[i].price} DH`);
    console.log(`available sets: ${trips[i].availableSeats}`);
    console.log(`---------------------------`);
  }
  console.log("\n=================================");
}

function acheterTickets() {
  // // 1. Demander les informations
  let passengerName = prompt("ecrit ton nom : ");
  let tId = parseInt(prompt("ecrit l'Id du trajet : "));
  let found = false;
  let trip;
  let seatNumber = 1;

  // // 2. Rechercher le trajet
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == tId) {
      found = true;
      trip = trips[i];
      break;
    }
  }

  // // 3. Vérifier si le trajet existe
  if (found == false) {
    console.log("trajet introuvable.");
    return;
  }

  // // 4. Vérifier s'il reste des places
  if (trip.availableSeats == 0) {
    console.log("train complet.");
    return;
  }

  // // 5. Trouver automatiquement le numéro de place
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].tripId == tId) {
      seatNumber++;
    }
  }

  // // 6. Créer le ticket
  let ticket = {
    id: tickets.length + 1,
    passengerName: passengerName,
    tripId: tId,
    seatNumber: seatNumber,
    price: trip.price,
  };

  // // 8. Diminuer les places disponibles
  trip.availableSeats--;

  // // 7. Ajouter le ticket au tableau tickets
  tickets.push(ticket);

  // // 9. Afficher le résultat
  console.log("\n\nticket achete avec succes.");
  console.log(`ticket #${ticket.id}`);
  console.log(`passager : ${ticket.passengerName}`);
  console.log(`trajet : ${trip.departure} -> ${trip.destination}`);
  console.log(`place : ${ticket.seatNumber}`);
  console.log(`prix : ${ticket.price} DH`);
}

function AfficherTickets() {
  if (tickets.length) {
    for (let i = 0; i < tickets.length; i++) {
      console.log(`ticket #${tickets[i].id}`);
      console.log(`passager : ${tickets[i].passengerName}`);
      console.log(`place : ${tickets[i].seatNumber}`);
      console.log(`prix : ${tickets[i].price} DH`);
      console.log("=========================================");
    }
  } else {
    console.log("Aucun ticket enregistré");
  }
}

}

function trierTrajets() {
  let temp = 0;
  for (let i = 0; i < trips.length; i++) {
    for (let j = 0; j < trips.length - 1 - i; j++) {
      if (trips[j].price < trips[j + 1].price) {
        temp = trips[j].price;
        trips[j].price = trips[j + 1].price;
        trips[j + 1].price = temp;
      }
    }
  }
  console.log(trips);
}
