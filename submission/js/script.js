const services = [
    {
        name: "Tent rentals",
        price: "Ksh. 5,000",
        description: "We provide high-quality tents for your events, ensuring comfort with style."
    },
    {
        name: "Decorations",
        price: "Ksh. 8,000",
        description: "Our decorations will turn your special day into a memorable and unforgettable experience."
    },
    {
        name: "Ballon Arches",
        price: "Ksh. 10,000",
        description: "We will create arches that will leave you speechless and make your event unique."
    },
    {
        name: "Tables and chair rentals",
        price: "Ksh. 1,000",
        description: "We provide tables and chairs for your events, ensuring comfort with style."
    },
    {
        name: "Lighting",
        price: "Ksh. 2,500",
        description: "This will be lighting that will create a magical atmosphere for your event, making it unforgettable."
    }
]

const servicesList = document.querySelector("#services-list");
services.forEach(service => {
    const item = document.createElement("li");
    item.textContent = `${service.name} - ${service.price}: ${service.description}`;
    servicesList.appendChild(item);
});


let input = document.querySelector("#wishlist-input");
let addButton = document.querySelector("#wishlistBtn");
let list = document.querySelector("#list");
let emptyMessage = document.querySelector("#wishlist-display");

addButton.addEventListener("click", () => {
    const value = input.value;
    if (value === "") {
        input.focus();
        return;
    }
    const item = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = value;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeBtn");
    removeButton.textContent = "X";
    removeButton.setAttribute("aria-label", `Remove ${value} from wishlist`);

    removeButton.addEventListener("click", () => {
        item.remove();
        emptyMessage.computedStyleMap.display = list.children.length === 0 ? "block" : "none";
    });
    item.appendChild(text);
    item.appendChild(removeButton);
    list.appendChild(item);

    input.value = "";
    input.focus();
    emptyMessage.computedStyleMap.display = list.children.length === 0 ? "block" : "none";
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") return; 
        event.preventDefault();
        const value = wishlistInput.value.trim();
        if (value === "") {
            wishlistInput.focus();
            return;
        }

        const item = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = value;

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("wishlist-remove-btn");
        removeButton.textContent = "×";
        removeButton.setAttribute("aria-label", `Remove ${value} from wishlist`);

        removeButton.addEventListener("click", function () {
            item.remove();
            wishlistEmptyMessage.style.display = wishlistList.children.length === 0 ? "block" : "none";
        });

        item.appendChild(text);
        item.appendChild(removeButton);
        wishlistList.appendChild(item);

        wishlistInput.value = "";
        wishlistInput.focus();
        wishlistEmptyMessage.style.display = wishlistList.children.length === 0 ? "block" : "none";
    });

wishlistEmptyMessage.style.display = wishlistList.children.length === 0 ? "block" : "none";


let form = document.querySelector("#feedback-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
let status = document.querySelector("#feedback-status");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const errors = [];
    if (name === "") {
        errors.push("Name is required.");
    }
    if (email === "") {
        errors.push("Email is required.");
    }
    if (message === "") {
        errors.push("Message is required.");
    } else if (message.length < 10) {
        errors.push("Message must be at least 10 characters long.");
    }
    if (errors.length > 0) {
        status.classList.remove("success");
        status.classList.add("is-error");
        errors.map(function (message) { return `<li>${message}</li>`; }).join("") +
            "</ul>";
        return;
    }

    status.classList.remove("is-error");
    status.classList.add("is-success");
    status.textContent = "Thank you for your feedback!";

    feedbackForm.reset();
});

