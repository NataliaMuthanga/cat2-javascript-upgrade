const services = [
    {name: "Tent rentals",
     price: "Ksh. 5,000",
     description: "We provide high-quality tents for your events, ensuring comfort with style."
    },
    {name: "Decorations",
     price: "Ksh. 8,000",
     description:"Our decorations will turn your special day into a memorable and unforgettable experience."
    },
    {name: "Ballon Arches",
     price: "Ksh. 10,000",
     description: "We will create arches that will leave you speechless and make your event unique."
    },
    {name: "Tables and chair rentals",
     price: "Ksh. 1,000",
     description: "We provide tables and chairs for your events, ensuring comfort with style."
    },
    {name: "Lighting",
     price: "Ksh. 2,500",
     description: "This will be lighting that will create a magical atmosphere for your event, making it unforgettable."
    }
]

function displayServices(servicesArray){
    const servicesList = document.getElementById("services-list");
    servicesArray.forEach(service => {
        const item = document.createElement("li");
        item.textContent = `${service.name} - ${service.price}: ${service.description}`;
        servicesList.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    displayServices(services);
});