import {
    MapPin,
    Users,
    Car,
    Mountain,
    Camera,
    Tent,
} from "lucide-react";

export const services = [
    { icon: Car, title: "On-Demand Van Booking", desc: "Book vans instantly via app/website with real-time tracking." },
    { icon: Mountain, title: "Adventure-Ready Vehicles", desc: "4×4 vans equipped for mountains and off-road terrain." },
    { icon: Users, title: "Themed Travel Packages", desc: "Curated trips for families, couples, students, and corporate groups." },
    { icon: Tent, title: "Camping Gear Rental", desc: "Premium tents, sleeping bags, and camping equipment rentals." },
    { icon: Camera, title: "Photography Services", desc: "Professional photography & drone coverage for your trip." },
    { icon: MapPin, title: "Local Experiences", desc: "Expert local guides, treks, and cultural immersion experiences." },
];

export const packages = [
    {
        name: "Standard",
        price: "PKR 15,000",
        period: "/ day",
        capacity: "8-12 Persons",
        description: "Comfortable & reliable for families and groups.",
        features: ["Comfortable Journey", "Reliable Service", "Family Friendly", "Spacious Interior"],
        color: "from-blue-500 to-blue-700",
        popular: false
    },
    {
        name: "Luxury",
        price: "PKR 20,000",
        period: "/ day",
        capacity: "7-10 Persons",
        description: "Extra Comfort, Premier interior, smooth ride.",
        features: ["Premier Interior", "Extra Comfort", "Smooth Ride", "Entertainment System"],
        color: "from-purple-500 to-purple-700",
        popular: true
    },
    {
        name: "Premium",
        price: "PKR 30,000",
        period: "/ day",
        capacity: "4-6 Persons",
        description: "Ultra Comfort, Privacy & Premium experience.",
        features: ["Ultra Luxury", "Complete Privacy", "Premium Experience", "Reclining Seats"],
        color: "from-yellow-500 to-yellow-700",
        popular: false
    },
];

export const pricing = [
    { type: "Hiace", price: "10-14k", unit: "PKR/day" },
    { type: "Grand Cabin", price: "14-18k", unit: "PKR/day" },
    { type: "4×4 Vans", price: "18-25k", unit: "PKR/day" },
    { type: "Camping Gear", price: "3-5k", unit: "PKR/day" },
    { type: "Photography", price: "10k", unit: "PKR/trip" },
    { type: "Tour Guide", price: "4-8k", unit: "PKR/day" },
];

export const longRoutes = [
    { route: "Islamabad → Hunza", duration: "3-4 days", price: "PKR 80k - 140k" },
    { route: "Lahore → Swat", duration: "2-3 days", price: "PKR 50k - 90k" },
    { route: "Karachi → Gwadar", duration: "2 days", price: "PKR 60k - 100k" },
    { route: "Islamabad → Skardu", duration: "4-5 days", price: "PKR 120k - 200k" },
];
