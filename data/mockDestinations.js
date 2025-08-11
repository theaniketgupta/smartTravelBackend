// Mock destination data for the travel application
export const mockDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    type: "Beach",
    country: "Indonesia",
    continent: "Asia",
    coordinates: { lat: -8.3405, lng: 115.0920 },
    images: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    ],
    description: "Beautiful beaches, temples, and rich culture",
    detailedDescription: "Bali offers a perfect blend of spiritual culture, stunning landscapes, and tropical paradise. From the cultural heart of Ubud to the beach clubs of Seminyak, there's something for every traveler.",
    highlights: [
      "Visit ancient temples like Tanah Lot and Uluwatu",
      "Explore the rice terraces in Jatiluwih",
      "Relax on pristine beaches in Nusa Dua",
      "Experience traditional Balinese culture in Ubud",
      "Enjoy world-class surfing in Canggu"
    ],
    bestTimeToVisit: "April to October (dry season)",
    averageTemperature: "26-30°C (79-86°F)",
    currency: "Indonesian Rupiah (IDR)",
    language: "Indonesian, Balinese",
    timeZone: "UTC+8",
    rating: 4.8,
    reviewCount: 2847,
    baseCosts: {
      flightMultiplier: 1.0,
      hotelMultiplier: 1.0,
      activitiesMultiplier: 1.0,
      totalMultiplier: 0.8
    },
    flightInfo: {
      averageDuration: "15-20 hours (with stops)",
      majorAirports: ["Ngurah Rai International Airport (DPS)"],
      averageCost: "$500-800"
    },
    accommodation: {
      budget: "$20-50/night",
      midRange: "$50-150/night",
      luxury: "$150-500/night",
      recommendations: [
        "The Mulia Resort & Villas",
        "Four Seasons Resort Bali at Sayan",
        "Hanging Gardens of Bali"
      ]
    },
    activities: [
      {
        name: "Temple Hopping Tour",
        cost: "$30-50",
        duration: "Full day",
        description: "Visit iconic temples including Tanah Lot, Uluwatu, and Besakih"
      },
      {
        name: "Ubud Rice Terrace Trek",
        cost: "$25-40",
        duration: "Half day",
        description: "Guided walk through stunning rice paddies and traditional villages"
      },
      {
        name: "Volcano Sunrise Hike",
        cost: "$40-70",
        duration: "Early morning",
        description: "Climb Mount Batur for spectacular sunrise views"
      }
    ],
    foodAndDining: {
      averageMealCost: "$3-15",
      mustTryDishes: ["Nasi Goreng", "Satay", "Rendang", "Gado-gado"],
      recommendedRestaurants: [
        "Locavore (Fine dining)",
        "Warung Babi Guling Ibu Oka (Local)",
        "La Lucciola (Beachfront)"
      ]
    },
    transportation: {
      localTransport: ["Scooter rental ($5-10/day)", "Private driver ($30-50/day)", "Taxi/Grab"],
      tips: "Renting a scooter is popular but traffic can be chaotic. Private drivers are recommended for day trips."
    },
    safetyTips: [
      "Drink bottled water",
      "Use sunscreen and stay hydrated",
      "Respect local customs and dress codes at temples",
      "Be cautious with street food if you have a sensitive stomach"
    ],
    estimatedBudget: {
      budget: "$30-50/day",
      midRange: "$50-100/day",
      luxury: "$100-300/day"
    },
    weatherInfo: {
      drySeasonMonths: ["April", "May", "June", "July", "August", "September", "October"],
      wetSeasonMonths: ["November", "December", "January", "February", "March"],
      averageRainfall: "1,500mm annually"
    },
    bestMonths: ["April", "May", "June", "July", "August", "September"]
  },
  {
    id: 2,
    name: "Swiss Alps, Switzerland",
    type: "Hiking",
    country: "Switzerland",
    continent: "Europe",
    coordinates: { lat: 46.8182, lng: 8.2275 },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
      "https://images.unsplash.com/photo-1527004760525-b9b8e8b4b0a5"
    ],
    description: "Stunning mountain views and hiking trails",
    detailedDescription: "Experience the majesty of the Swiss Alps with pristine mountain lakes, snow-capped peaks, and some of the world's most scenic hiking trails. Perfect for outdoor enthusiasts and nature lovers.",
    highlights: [
      "Ride the Jungfraujoch railway to 'Top of Europe'",
      "Hike the famous Matterhorn trails",
      "Explore charming villages like Zermatt and Grindelwald",
      "Take scenic train rides through mountain passes",
      "Experience traditional Swiss culture and cuisine"
    ],
    bestTimeToVisit: "June to September (hiking season)",
    averageTemperature: "15-25°C (59-77°F) in summer",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian, Romansh",
    timeZone: "UTC+1",
    rating: 4.9,
    reviewCount: 1923,
    baseCosts: {
      flightMultiplier: 1.2,
      hotelMultiplier: 1.1,
      activitiesMultiplier: 1.0,
      totalMultiplier: 1.2
    },
    flightInfo: {
      averageDuration: "8-12 hours",
      majorAirports: ["Zurich Airport (ZUR)", "Geneva Airport (GVA)"],
      averageCost: "$600-1200"
    },
    accommodation: {
      budget: "$80-150/night",
      midRange: "$150-300/night",
      luxury: "$300-800/night",
      recommendations: [
        "The Chedi Andermatt",
        "Grand Hotel Zermatterhof",
        "Hotel Bellevue des Alpes"
      ]
    },
    activities: [
      {
        name: "Matterhorn Glacier Paradise",
        cost: "$80-120",
        duration: "Full day",
        description: "Cable car to Europe's highest mountain station with glacier views"
      },
      {
        name: "Jungfraujoch Excursion",
        cost: "$100-150",
        duration: "Full day",
        description: "Train journey to the 'Top of Europe' with ice palace and glacier views"
      },
      {
        name: "Alpine Hiking Tours",
        cost: "$50-100",
        duration: "Half/Full day",
        description: "Guided hikes through scenic mountain trails and alpine meadows"
      }
    ],
    foodAndDining: {
      averageMealCost: "$25-60",
      mustTryDishes: ["Fondue", "Raclette", "Rösti", "Swiss Chocolate"],
      recommendedRestaurants: [
        "Restaurant Taverne (Traditional)",
        "Chez Vrony (Mountain dining)",
        "The Omnia (Fine dining)"
      ]
    },
    transportation: {
      localTransport: ["Swiss Travel Pass", "Regional trains", "Cable cars", "Buses"],
      tips: "Swiss Travel Pass offers unlimited travel on trains, buses, and boats. Very efficient public transport system."
    },
    safetyTips: [
      "Check weather conditions before hiking",
      "Carry proper hiking gear and layers",
      "Stay on marked trails",
      "Be aware of altitude changes"
    ],
    estimatedBudget: {
      budget: "$100-150/day",
      midRange: "$150-250/day",
      luxury: "$250-500/day"
    },
    weatherInfo: {
      bestHikingMonths: ["June", "July", "August", "September"],
      snowSeasonMonths: ["December", "January", "February", "March"],
      averageSnowfall: "300-500cm annually"
    },
    bestMonths: ["June", "July", "August", "September"]
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    type: "Culture",
    country: "Japan",
    continent: "Asia",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26"
    ],
    description: "Rich culture, amazing food, and modern attractions",
    detailedDescription: "Experience the fascinating contrast of ancient temples and cutting-edge technology, world-class cuisine, and unique cultural experiences in Japan's bustling capital city.",
    highlights: [
      "Visit historic temples like Senso-ji and Meiji Shrine",
      "Explore vibrant neighborhoods like Shibuya and Harajuku",
      "Experience traditional culture in Asakusa",
      "Enjoy world-renowned sushi and ramen",
      "Shop in Ginza and electronic districts"
    ],
    bestTimeToVisit: "March to May, September to November",
    averageTemperature: "15-25°C (59-77°F)",
    currency: "Japanese Yen (JPY)",
    language: "Japanese",
    timeZone: "UTC+9",
    rating: 4.7,
    reviewCount: 3156,
    baseCosts: {
      flightMultiplier: 1.1,
      hotelMultiplier: 1.0,
      activitiesMultiplier: 1.2,
      totalMultiplier: 0.9
    },
    flightInfo: {
      averageDuration: "11-14 hours",
      majorAirports: ["Narita International (NRT)", "Haneda Airport (HND)"],
      averageCost: "$550-900"
    },
    accommodation: {
      budget: "$30-80/night",
      midRange: "$80-200/night",
      luxury: "$200-600/night",
      recommendations: [
        "The Ritz-Carlton Tokyo",
        "Park Hyatt Tokyo",
        "Hoshinoya Tokyo"
      ]
    },
    activities: [
      {
        name: "Tokyo City Tour",
        cost: "$60-100",
        duration: "Full day",
        description: "Guided tour covering major attractions including temples, markets, and modern districts"
      },
      {
        name: "Sushi Making Class",
        cost: "$80-120",
        duration: "3-4 hours",
        description: "Learn to make authentic sushi from professional chefs"
      },
      {
        name: "Traditional Tea Ceremony",
        cost: "$40-70",
        duration: "2 hours",
        description: "Experience authentic Japanese tea ceremony in traditional setting"
      }
    ],
    foodAndDining: {
      averageMealCost: "$8-30",
      mustTryDishes: ["Sushi", "Ramen", "Tempura", "Yakitori", "Mochi"],
      recommendedRestaurants: [
        "Sukiyabashi Jiro (Sushi)",
        "Ichiran (Ramen)",
        "Gonpachi (Traditional)"
      ]
    },
    transportation: {
      localTransport: ["JR Pass", "Metro", "Taxis", "Buses"],
      tips: "JR Pass is excellent for tourists. Tokyo metro system is extensive but can be complex - get a transit app."
    },
    safetyTips: [
      "Japan is very safe, but carry cash as many places don't accept cards",
      "Learn basic Japanese phrases",
      "Respect local customs and etiquette",
      "Remove shoes when entering homes/temples"
    ],
    estimatedBudget: {
      budget: "$60-100/day",
      midRange: "$100-200/day",
      luxury: "$200-500/day"
    },
    weatherInfo: {
      springMonths: ["March", "April", "May"],
      summerMonths: ["June", "July", "August"],
      autumnMonths: ["September", "October", "November"],
      winterMonths: ["December", "January", "February"]
    },
    bestMonths: ["March", "April", "May", "September", "October", "November"]
  },
  {
    id: 4,
    name: "Las Vegas, USA",
    type: "Casinos",
    country: "United States",
    continent: "North America",
    coordinates: { lat: 36.1699, lng: -115.1398 },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    ],
    description: "Entertainment capital with world-class shows and casinos",
    detailedDescription: "Las Vegas offers non-stop entertainment with world-famous casinos, spectacular shows, fine dining, and vibrant nightlife in the heart of the Nevada desert.",
    highlights: [
      "Experience world-class casino gaming",
      "Watch spectacular shows and performances",
      "Dine at celebrity chef restaurants",
      "Explore the famous Las Vegas Strip",
      "Visit nearby natural attractions like Red Rock Canyon"
    ],
    bestTimeToVisit: "March to May, October to November",
    averageTemperature: "20-35°C (68-95°F)",
    currency: "US Dollar (USD)",
    language: "English",
    timeZone: "UTC-8",
    rating: 4.5,
    reviewCount: 4521,
    baseCosts: {
      flightMultiplier: 0.8,
      hotelMultiplier: 0.9,
      activitiesMultiplier: 1.5,
      totalMultiplier: 0.7
    },
    flightInfo: {
      averageDuration: "4-6 hours (domestic US)",
      majorAirports: ["McCarran International Airport (LAS)"],
      averageCost: "$200-600"
    },
    accommodation: {
      budget: "$30-80/night",
      midRange: "$80-200/night",
      luxury: "$200-800/night",
      recommendations: [
        "The Bellagio",
        "Wynn Las Vegas",
        "The Venetian Resort"
      ]
    },
    activities: [
      {
        name: "Casino Gaming Experience",
        cost: "$50-200",
        duration: "Variable",
        description: "Try your luck at world-famous casinos with slots, poker, and table games"
      },
      {
        name: "Cirque du Soleil Show",
        cost: "$80-300",
        duration: "2 hours",
        description: "Watch spectacular acrobatic performances by world-renowned artists"
      },
      {
        name: "Red Rock Canyon Tour",
        cost: "$60-120",
        duration: "Half day",
        description: "Explore stunning desert landscapes just outside the city"
      }
    ],
    foodAndDining: {
      averageMealCost: "$15-80",
      mustTryDishes: ["Prime Rib", "Buffet", "Cocktails", "Steakhouse Classics"],
      recommendedRestaurants: [
        "Gordon Ramsay Hell's Kitchen",
        "Bacchanal Buffet",
        "Joel Robuchon"
      ]
    },
    transportation: {
      localTransport: ["Taxi", "Uber/Lyft", "Monorail", "Walking"],
      tips: "Most attractions are on the Strip and walkable. Taxis and rideshares are convenient for longer distances."
    },
    safetyTips: [
      "Stay hydrated in the desert climate",
      "Set gambling limits and stick to them",
      "Be aware of your surroundings on the Strip",
      "Keep valuables secure"
    ],
    estimatedBudget: {
      budget: "$50-100/day",
      midRange: "$100-250/day",
      luxury: "$250-600/day"
    },
    weatherInfo: {
      bestVisitMonths: ["March", "April", "May", "October", "November"],
      hotMonths: ["June", "July", "August", "September"],
      averageRainfall: "100mm annually"
    },
    bestMonths: ["March", "April", "May", "October", "November"]
  },
  {
    id: 5,
    name: "Orlando, Florida",
    type: "Family Fun",
    country: "United States",
    continent: "North America",
    coordinates: { lat: 28.5383, lng: -81.3792 },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    ],
    description: "Theme park capital perfect for families with children",
    detailedDescription: "Orlando is the ultimate family destination with world-famous theme parks, magical experiences, and attractions that create lifelong memories for visitors of all ages.",
    highlights: [
      "Visit Walt Disney World Resort",
      "Experience Universal Studios theme parks",
      "Explore SeaWorld Orlando",
      "Enjoy ICON Park attractions",
      "Discover LEGOLAND Florida"
    ],
    bestTimeToVisit: "October to March (cooler weather)",
    averageTemperature: "22-32°C (72-90°F)",
    currency: "US Dollar (USD)",
    language: "English",
    timeZone: "UTC-5",
    rating: 4.6,
    reviewCount: 5672,
    baseCosts: {
      flightMultiplier: 0.9,
      hotelMultiplier: 1.1,
      activitiesMultiplier: 1.3,
      totalMultiplier: 0.85
    },
    flightInfo: {
      averageDuration: "2-5 hours (domestic US)",
      majorAirports: ["Orlando International Airport (MCO)"],
      averageCost: "$150-500"
    },
    accommodation: {
      budget: "$60-120/night",
      midRange: "$120-300/night",
      luxury: "$300-800/night",
      recommendations: [
        "Disney's Grand Floridian Resort",
        "Universal's Portofino Bay Hotel",
        "Four Seasons Resort Orlando"
      ]
    },
    activities: [
      {
        name: "Disney World Multi-Park Pass",
        cost: "$100-150/day",
        duration: "Full day",
        description: "Access to Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom"
      },
      {
        name: "Universal Studios Experience",
        cost: "$80-120/day",
        duration: "Full day",
        description: "Enjoy thrilling rides and attractions at Universal Studios and Islands of Adventure"
      },
      {
        name: "SeaWorld Orlando",
        cost: "$70-100/day",
        duration: "Full day",
        description: "Marine life shows, educational experiences, and exciting rides"
      }
    ],
    foodAndDining: {
      averageMealCost: "$12-40",
      mustTryDishes: ["Theme Park Treats", "Character Dining", "Dole Whip", "Turkey Legs"],
      recommendedRestaurants: [
        "Be Our Guest Restaurant",
        "The Toothsome Chocolate Emporium",
        "Victoria & Albert's"
      ]
    },
    transportation: {
      localTransport: ["Disney Transportation", "Uber/Lyft", "Rental Car", "Hotel Shuttles"],
      tips: "Disney provides free transportation between parks and resorts. Rental cars are convenient for visiting multiple theme parks."
    },
    safetyTips: [
      "Stay hydrated in Florida heat",
      "Use sunscreen regularly",
      "Keep track of children in crowded areas",
      "Plan rest breaks during busy park days"
    ],
    estimatedBudget: {
      budget: "$80-150/day",
      midRange: "$150-300/day",
      luxury: "$300-600/day"
    },
    weatherInfo: {
      bestVisitMonths: ["October", "November", "December", "January", "February", "March"],
      hotHumidMonths: ["June", "July", "August", "September"],
      rainySeasonMonths: ["June", "July", "August", "September"]
    },
    bestMonths: ["October", "November", "December", "January", "February", "March"]
  },
  {
    id: 6,
    name: "Paris, France",
    type: "Food",
    country: "France",
    continent: "Europe",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    ],
    description: "Culinary capital with world-renowned cuisine and culture",
    detailedDescription: "Paris is the ultimate destination for food lovers, offering world-class cuisine, charming cafés, historic landmarks, and an unparalleled cultural experience in the City of Light.",
    highlights: [
      "Dine at Michelin-starred restaurants",
      "Visit iconic landmarks like the Eiffel Tower and Louvre",
      "Explore charming neighborhoods and local markets",
      "Experience French café culture",
      "Take cooking classes with professional chefs"
    ],
    bestTimeToVisit: "April to June, September to October",
    averageTemperature: "12-25°C (54-77°F)",
    currency: "Euro (EUR)",
    language: "French",
    timeZone: "UTC+1",
    rating: 4.8,
    reviewCount: 3847,
    baseCosts: {
      flightMultiplier: 1.0,
      hotelMultiplier: 1.2,
      activitiesMultiplier: 1.1,
      totalMultiplier: 1.1
    },
    flightInfo: {
      averageDuration: "7-10 hours",
      majorAirports: ["Charles de Gaulle Airport (CDG)", "Orly Airport (ORY)"],
      averageCost: "$400-900"
    },
    accommodation: {
      budget: "$60-120/night",
      midRange: "$120-300/night",
      luxury: "$300-1000/night",
      recommendations: [
        "The Ritz Paris",
        "Le Meurice",
        "Hotel Plaza Athénée"
      ]
    },
    activities: [
      {
        name: "French Cooking Class",
        cost: "$80-150",
        duration: "4 hours",
        description: "Learn to prepare classic French dishes with professional chefs"
      },
      {
        name: "Wine Tasting Tour",
        cost: "$60-120",
        duration: "3 hours",
        description: "Discover French wines with expert sommeliers in historic cellars"
      },
      {
        name: "Food Market Tour",
        cost: "$40-80",
        duration: "3 hours",
        description: "Explore local markets and taste artisanal French products"
      }
    ],
    foodAndDining: {
      averageMealCost: "$20-80",
      mustTryDishes: ["Croissants", "Coq au Vin", "Escargot", "Macarons", "French Cheese"],
      recommendedRestaurants: [
        "L'Ambroisie (Michelin 3-star)",
        "Bistrot Paul Bert (Traditional)",
        "Du Pain et des Idées (Bakery)"
      ]
    },
    transportation: {
      localTransport: ["Metro", "Bus", "Taxi", "Walking", "Vélib' bikes"],
      tips: "The Metro system is extensive and efficient. Many attractions are walkable. Consider a weekly transport pass for longer stays."
    },
    safetyTips: [
      "Be aware of pickpockets in tourist areas",
      "Keep valuables secure",
      "Learn basic French phrases",
      "Respect local dining customs and hours"
    ],
    estimatedBudget: {
      budget: "$70-120/day",
      midRange: "$120-250/day",
      luxury: "$250-500/day"
    },
    weatherInfo: {
      bestVisitMonths: ["April", "May", "June", "September", "October"],
      rainierMonths: ["November", "December", "January", "February"],
      averageRainfall: "640mm annually"
    },
    bestMonths: ["April", "May", "June", "September", "October"]
  }
];

// Helper function to get destination by ID
export const getDestinationById = (id) => {
  return mockDestinations.find(dest => dest.id === parseInt(id));
};

// Helper function to get destinations by type
export const getDestinationsByType = (type) => {
  return mockDestinations.filter(dest => 
    dest.type.toLowerCase() === type.toLowerCase()
  );
};

// Helper function to get all destination types
export const getAllDestinationTypes = () => {
  return [...new Set(mockDestinations.map(dest => dest.type))];
};

// Helper function to get total count of destinations
export const getTotalDestinationsCount = () => {
  return mockDestinations.length;
};
