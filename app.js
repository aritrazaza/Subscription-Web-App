let Subscriptions = {
    Netflix: {
        name: "Netflix",
        id: 1,
        price: 9.99,
        isActive: true
    },

    Spotify: {
        name: "Spotify",
        id: 2,
        price: 14.99,
        isActive: true
    },

    Hulu: {
        name: "Hulu",
        id: 3,
        price: 12.99,
        isActive: true
    },

    Disney: {
        name: "Disney+",
        id: 4,
        price: 7.99,
        isActive: true
    },
}

function ToggleSubscription(subscriptionName) {
    if (Subscriptions.hasOwnProperty(subscriptionName)) {
        Subscriptions[subscriptionName].isActive = !Subscriptions[subscriptionName].isActive;
    }
}

function AddSubscription(subscriptionName, id, price, isActive) {
    if (!Subscriptions.hasOwnProperty(subscriptionName)) {
        Subscriptions[subscriptionName] = {
            name: subscriptionName,
            id: id,
            price: price,
            isActive: isActive
        };
    }
}

function RemoveSubscription(subscriptionName) {
    if (Subscriptions.hasOwnProperty(subscriptionName)) {
        delete Subscriptions[subscriptionName];;
    }
}

function resetSubscriptions() {
    for (let subscription in Subscriptions) {
        Subscriptions[subscription].isActive = true;
    }
}

function calculateCosts() {

    let baselineCost = 0;
    let simulatedCost = 0;
    let monthlySavings = 0;
    let annualImpact = 0;

    for (let subscription in Subscriptions) {
        baselineCost += Subscriptions[subscription].price;
    }

    for (let subscription in Subscriptions) {
        if (Subscriptions[subscription].isActive == true) {
            simulatedCost += Subscriptions[subscription].price;
        }

    monthlySavings = baselineCost - simulatedCost;

    annualImpact = monthlySavings * 12;
    
    }
    
    return {
        baselineCost: baselineCost,
        simulatedCost: simulatedCost,
        monthlySavings: monthlySavings,
        annualImpact: annualImpact
    };
}

console.log(calculateCosts());

const currentSpendElement = document.getElementById("current-spend");
const simulatedCostElement = document.getElementById("simulated-cost");
const monthlySavingsElement = document.getElementById("monthly-savings");
const annualImpactElement = document.getElementById("annual-impact");

const subscriptionListElement = document.getElementById("subscription-list");

function renderSubscriptions() {
    subscriptionListElement.innerHTML = "";

    for (let subscription in Subscriptions) {
        const subscriptionItem = document.createElement("li");
        subscriptionItem.textContent = `${Subscriptions[subscription].name}: ${Subscriptions[subscription].price.toFixed(2)}`;
        subscriptionListElement.appendChild(subscriptionItem);
    }
}

currentSpendElement.textContent = `${calculateCosts().baselineCost.toFixed(2)}`;
simulatedCostElement.textContent = `${calculateCosts().simulatedCost.toFixed(2)}`;
monthlySavingsElement.textContent = `${calculateCosts().monthlySavings.toFixed(2)}`;
annualImpactElement.textContent = `${calculateCosts().annualImpact.toFixed(2)}`;

renderSubscriptions();