document.addEventListener('DOMContentLoaded', () => {
    const cardData = {
        hotels: [
            { name: 'Hotel Albergo', image: 'images/pictures/hotel-a.jpg', description: 'An urban oasis in the heart of Beirut. Lush gardens, landscaped terraces and a 16 meter rooftop pool overlooking the city will leave you feeling refreshed.', phone: '+961 1 33 97 97', lat: 33.8880005, lng: 35.5076247 },
            { name: 'Beit Toureef', image: 'images/pictures/hotel-b.jpg', description: 'Nestled in the vibrant heart of Beirut, Beit Toureef is a charming house that embodies the spirit of an authentic Lebanese village house.', phone: '+961 70 38 40 21', lat: 33.8953375, lng: 35.516583 },
            { name: 'Arthaus Beirut', image: 'images/pictures/hotel-c.jpg', description: 'Set among the bars and restaurants of the vibrant Gemmayze neighbourhood, this elegant adults-only boutique hotel furnished with antiques and fine art is 1 km from the 51M route and 6 km from Ramlet al-Baida beach on the Mediterranean Sea.', phone: '+961 1 44 60 10', lat: 33.8946197, lng: 35.5093313 },
          /*  { name: 'The Gem Boutique Hotel', image: 'images/pictures/hotel-d.jpg', description: 'Variety of amenities...', phone: '+961 76 95 28 52', lat: 33.8949782, lng: 35.5139809 },
            { name: 'IHG Hotel', image: 'images/pictures/hotel-e.jpg', description: 'Stunning views...', phone: '+961 1 36 91 00', lat: 33.900734, lng: 35.4924051 },
            { name: 'Napoleon Hotel', image: 'images/pictures/hotel-f.jpg', description: '4-Star hotel...', phone: '+961 1 34 00 13', lat: 33.897331, lng: 35.479969 }*/
        ],
        restaurants: [
            { name: 'AI Restaurant', image: 'images/pictures/restaurant-a.jpg', description: 'Ai Restaurant is a new Asian restaurant concept that opened its doors in downtown Beirut.', phone: '+961 81 41 53 33', lat: 33.900672, lng: 35.4978794 },
            { name: 'La Villa 1920', image: 'images/pictures/restaurant-b.jpg', description: 'Fine dining experience in Badaro with Italian cuisine.', phone: '+961 3 77 18 44', lat: 33.8735453, lng: 35.5158006 },
            { name: 'The Bros', image: 'images/pictures/restaurant-c.jpg', description: 'The 3 Brother\'s established house for burgers, wings, and fries.', phone: '+961 1 57 02 97', lat: 33.8972115, lng: 35.5271449 },
         /*   { name: 'Metropole', image: 'images/pictures/restaurant-d.jpg', description: 'Best steak in town...', phone: '+961 1 99 99 38', lat: 33.901104, lng: 35.5006156 },
            { name: 'salud', image: 'images/pictures/restaurant-e.jpg', description: 'Top Mexican restaurant...', phone: '+961 3 91 70 70', lat: 33.8946876, lng: 35.5128555 },
            { name: 'Appetito Trattoria', image: 'images/pictures/restaurant-f.jpg', description: 'Feel like you’re in Rome...', phone: '+961 3 28 83 18', lat: 33.8962791, lng: 35.5159805 } */
        ],
        coffeeShops: [
            { name: 'Cozy Café', image: 'images/pictures/coffeeshop-a.jpg', description: 'A 3-in-1 experience: dine in, loosen up, and get COZY!', phone: '+961 70 66 56 65', lat: 33.8698574, lng: 35.4850322 },
            { name: 'Café Younes', image: 'images/pictures/coffeeshop-b.jpg', description: 'Popular for freshly roasted coffee and specialty drinks.', phone: '+961 1 75 09 75', lat: 33.8949165, lng: 35.4792144 },
            { name: 'Caffeine 1922', image: 'images/pictures/coffeeshop-c.jpg', description: 'Premium green beans, freshly roasted and delivered to your door.', phone: '+961 3 11 31 69', lat: 33.88958, lng: 35.4945806 },
          /*  { name: 'Beyt', image: 'images/pictures/coffeeshop-d.jpg', description: 'Relax in Mar Mikhael...', phone: '+961 76 76 13 90', lat: 33.897309, lng: 35.5278253 },
            { name: 'Café Younes', image: 'images/pictures/coffeeshop-e.jpg', description: 'Cozy break...', phone: '+961 1 38 05 99', lat: 33.8736357, lng: 35.5160567 },
            { name: 'The High Llama', image: 'images/pictures/coffeshop-f.jpg', description: 'Elegant and colorful...', phone: '+961 81 80 18 76', lat: 33.8899452, lng: 35.51847 }*/
        ],
        museums: [
            { name: 'National Museum of Beirut', image: 'images/pictures/museum-a.jpg', description: 'Principal museum of archaeology in Lebanon.', phone: '+961 1 42 67 03', lat: 33.8783745, lng: 35.5124569 },
            { name: 'Mim Museum', image: 'images/pictures/museum-b.jpg', description: 'A private mineral and fossil museum with 2,200 minerals.', phone: '+961 1 42 16 72', lat: 33.8798086, lng: 35.51412 },
            { name: 'Nicolas Sursock Museum', image: 'images/pictures/museum-c.jpg', description: 'A restored villa showcasing modern and contemporary art.', phone: '+961 1 20 20 01', lat: 33.893204, lng: 35.5137851 },
        ],
        rides: [
            { name: 'Uber', image: 'images/pictures/uber.jpg', description: 'Ride with Uber for a comfortable journey.', phone: '+961 1 23 45 67', lat: 33.8880005, lng: 35.5076247 },
            { name: 'Taxif', image: 'images/pictures/taxif.jpg', description: 'Quick and easy rides with Taxif.', phone: '+961 1 23 45 68', lat: 33.8953375, lng: 35.516583 },
            { name: 'Wave Bike', image: 'images/pictures/wb.jpg', description: 'Rent an e-bike for a fun ride around the city.', phone: '+961 1 23 45 69', lat: 33.8946197, lng: 35.5093313 },
          /*  { name: 'Allo Taxi', image: 'images/pictures/at.jpg', description: 'Popular ride-hailing...', url: 'https://allo.taxi/home', phone: '1213' },
            { name: 'Talixo-Beirut', image: 'images/pictures/tb.jpg', description: 'Standardized bookings...', url: 'https://talixo.com/taxi-beirut/' },
            { name: 'Beirut by Bike', image: 'images/pictures/bb.jpg', description: 'Relaxing Bike Rides...', whatsapp: 'https://wa.me/9613435524' }*/
        ],
    };

    const cardsContainer = document.getElementById('cards-container');
    const welcomeMessage = document.createElement('div');
    const discoverMessage = document.createElement('div');
    
    welcomeMessage.className = 'welcome-message';
    welcomeMessage.innerText = "Welcome to Beirut Unlocked";
    discoverMessage.className = 'discover-message';
    discoverMessage.innerText = "Discover the heart and soul of Beirut’s hidden treasures.";
    
    document.querySelector('.main-content').insertBefore(discoverMessage, cardsContainer);
    document.querySelector('.main-content').insertBefore(welcomeMessage, discoverMessage);
    
    let viewedCards = [];
    
    document.querySelectorAll('#sidebar button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.id;
            loadCards(category);
        });
    });
    
    document.getElementById('rides').addEventListener('click', () => {
        cardsContainer.innerHTML = '';
        loadCards('rides');
    });
    
    function loadCards(category) {
        welcomeMessage.style.display = 'none';
        discoverMessage.style.display = 'none';
        cardsContainer.innerHTML = '';
    
        const cards = cardData[category];
        cards.forEach((card, index) => {
            const cardElement = createCardElement(card, category, index);
            cardsContainer.appendChild(cardElement);
        });
    
        setDiscoverMessage(category);
    }
    
    function createCardElement(card, category, index) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.setAttribute('data-index', index); 
    
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${card.image}" alt="${card.name}">
                    <h3>${card.name}</h3>
                    <p>${card.description}</p>
                    <div class="bottom">
                        ${category === 'rides' ? 
                            `<button class="ride-btn">${getRideButtonText(card.name)}</button>` :
                            `<span class="phone-icon">📞</span><span>${card.phone}</span>
                            <button onclick="openMap(${card.lat}, ${card.lng})">📍</button>`
                        }
                    </div>
                </div>
                <div class="card-back">
                    <img src="${card.image}" alt="${card.name}">
                    <h3>${card.name}</h3>
                    <p>${card.description}</p>
                    <div class="bottom">
                        ${category === 'rides' ? 
                            `<button class="ride-btn">${getRideButtonText(card.name)}</button>` :
                            `<span class="phone-icon">📞</span><span>${card.phone}</span>
                            <button onclick="openMap(${card.lat}, ${card.lng})">📍</button>`
                        }
                    </div>
                </div>
            </div>
        `;
    
        cardElement.addEventListener('click', () => {
            const cardInner = cardElement.querySelector('.card-inner');
            cardInner.classList.toggle('flip'); 
    
            if (!viewedCards.includes(card)) {
                viewedCards.push(card);
            }
    
            if (category === 'museums') {
                cardElement.classList.toggle('flip-360');
            } else {
                cardElement.classList.toggle('flip-180');
            }
        });
    
        if (category === 'rides') {
            const rideButton = cardElement.querySelector('.ride-btn');
            rideButton.addEventListener('click', (event) => {
                event.stopPropagation();
                handleRideAction(card.name);
            });
        }
    
        return cardElement;
    }

    function setDiscoverMessage(category) {
        switch (category) {
            case 'hotels':
                discoverMessage.innerText = "Unwind in Beirut's best-kept accommodations.";
                break;
            case 'restaurants':
                discoverMessage.innerText = "Taste the flavors of Beirut off the beaten path.";
                break;
            case 'coffeeShops':
                discoverMessage.innerText = "Sip and savor at the city’s undiscovered coffee gems.";
                break;
            case 'museums':
                discoverMessage.innerText = "Journey through Beirut’s rich tapestry of art and history.";
                break;
            case 'rides':
                discoverMessage.innerText = "Choose your ride in Beirut.";
                break;
        }
        discoverMessage.style.display = 'block'; 
    }
    
    document.getElementById('home-btn').addEventListener('click', () => {
        cardsContainer.innerHTML = '';
        welcomeMessage.style.display = 'block';
        discoverMessage.style.display = 'block';
        discoverMessage.innerText = "Discover the heart and soul of Beirut’s hidden treasures.";
        const randomCards = getRandomCards();
        displayCards(randomCards);
    });
    
    function getRideButtonText(name) {
        switch (name) {
            case 'Uber':
                return 'Call an Uber?';
            case 'Taxif':
                return 'Ride with Taxif';
            case 'Wave Bike':
                return 'Place a Subscription';
            default:
                return 'Action';
        }
    }
    
    function handleRideAction(name) {
        switch (name) {
            case 'Uber':
                openRideRequest('https://m.uber.com/');
                break;
            case 'Taxif':
                openRideRequest('https://taxifrideorderlink.com/');
                break;
            case 'Wave Bike':
                openWhatsApp('https://wa.me/96170632955');
                break;
        }
    }
    
    function openRideRequest(url) {
        Swal.fire({
            title: "Ride Request",
            text: "Redirecting you to the app...",
            icon: "info",
            confirmButtonText: "Continue",
            preConfirm: () => {
                window.open(url, '_blank');
            }
        });
    }
    
    function openWhatsApp(url) {
        Swal.fire({
            title: "WhatsApp Chat",
            text: "Opening WhatsApp for subscription...",
            icon: "info",
            confirmButtonText: "Open WhatsApp",
            preConfirm: () => {
                window.open(url, '_blank');
            }
        });
    }
    
    function getRandomCards() {
        const allCards = Object.keys(cardData)
            .filter(category => category !== 'rides') 
            .flatMap(category => cardData[category]);
        return allCards.sort(() => 0.5 - Math.random()).slice(0, 3);
    }
    
    function displayCards(cardList) {
        cardsContainer.innerHTML = '';
        cardList.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <h3>${card.name}</h3>
                <p>${card.description}</p>
                <div class="bottom">
                    <span class="phone-icon">📞</span><span>${card.phone}</span>
                    <button onclick="openMap(${card.lat}, ${card.lng})">📍</button>
                </div>
            `;
            cardsContainer.appendChild(cardElement);
        });
    }

    document.getElementById('recently-viewed-btn').addEventListener('click', () => {
        if (viewedCards.length === 0) {
            Swal.fire({
                title: "No Recently Viewed Cards",
                text: "You should view at least one card from the categories.",
                icon: "info",
                confirmButtonText: "Return to Home",
            }).then(() => {
                document.getElementById('home-btn').click();
            });
        } else {
            const recentCards = viewedCards.slice(-3);
            displayCards(recentCards);
        }
    });
    
    document.getElementById('help-desk-btn').addEventListener('click', () => {
        Swal.fire({
            title: "Help Desk",
            html: `
                <div class="help-desk-prompt">
                    <input type="text" id="help-name" placeholder="Your Name" required />
                    <input type="email" id="help-email" placeholder="Your Email" required />
                    <textarea id="help-desc" placeholder="How can we help you?"></textarea>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            willOpen: () => {
                document.body.classList.add('swal2-height-auto');
            },
            willClose: () => {
                document.body.classList.remove('swal2-height-auto');
            },
            preConfirm: () => {
                const name = document.getElementById('help-name').value;
                const email = document.getElementById('help-email').value;
                const description = document.getElementById('help-desc').value;
    
                if (!name || !email) {
                    Swal.showValidationMessage('Username and email are required!');
                    return false; 
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {                
                Swal.fire({
                    title: "Thank you!",
                    text: "Your request has been submitted.",
                    icon: "success"
                });
            } else if (result.isDismissed) {
                Swal.fire({
                    title: "Don't want to fill it?",
                    text: "Send us a voice note instead!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Open WhatsApp",
                    cancelButtonText: "Cancel"
                }).then((whatsappResult) => {
                    if (whatsappResult.isConfirmed) {
                        window.open('https://wa.me/96176986034', '_blank');
                    }
                });
            }
        });
    });
    
    window.openMap = function openMap(lat, lng) {
        if (lat && lng) {
            const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
            window.open(googleMapsUrl, '_blank');
        } else {
            alert('Please enter valid location');
        }
    };
});
