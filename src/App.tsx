import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  Mountain,
  Camera,
  Tent,
  Sparkles,
  ChevronRight,
  CheckCircle
} from "lucide-react";

type Vec3 = [number, number, number];
type VanModelProps = {
  position?: Vec3;
  rotation?: Vec3;
  scale?: number | Vec3;
};

function VanModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: VanModelProps) {
  const meshRef = useRef<THREE.Group | null>(null);

  const wheelRefs = [
    useRef<THREE.Mesh | null>(null),
    useRef<THREE.Mesh | null>(null),
    useRef<THREE.Mesh | null>(null),
    useRef<THREE.Mesh | null>(null),
  ];

  const wheelPositions: Vec3[] = [
    [-1.2, -0.7, 1.5],
    [ 1.2, -0.7, 1.5],
    [-1.2, -0.7, -1.5],
    [ 1.2, -0.7, -1.5],
  ];

  const headlightPositions: Vec3[] = [
    [-0.8, 0, -2.4],
    [ 0.8, 0, -2.4],
  ];
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
    
    wheelRefs.forEach((wheel) => {
      if (wheel.current) {
        wheel.current.rotation.x += 0.05;
      }
    });
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[3, 1.5, 5]} />
        <meshStandardMaterial 
          color="#2563eb" 
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[2.8, 0.1, 4.5]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      
      <mesh position={[0, 0.2, -2.3]} castShadow>
        <boxGeometry args={[2.8, 1.2, 0.2]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      <mesh position={[0, 0.8, 0.5]} castShadow>
        <boxGeometry args={[2.6, 0.6, 3]} />
        <meshStandardMaterial 
          color="#7dd3fc" 
          transparent 
          opacity={0.3}
        />
      </mesh>
      
      {wheelPositions.map((pos, i) => (
        <mesh key={i} ref={wheelRefs[i]} position={pos} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      ))}

      {headlightPositions.map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}

function Mountains() {
  const mountains = useRef<THREE.Group | null>(null);
  
  useFrame((state) => {
    if (mountains.current) {
      mountains.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={mountains}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 10 - 20, -3, -20 + i * 2]} rotation={[0, 0.5, 0]}>
          <coneGeometry args={[8, 10, 4]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#4b5563" : "#374151"} 
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function ServiceIcons() {
  const icons = useRef<THREE.Group | null>(null);

  const iconsArray: {
    type: any;
    color: string;
    pos: Vec3;
  }[] = [
    { type: Car, color: "#3b82f6", pos: [-5, 2, -5] },
    { type: Tent, color: "#10b981", pos: [5, 3, -4] },
    { type: Camera, color: "#8b5cf6", pos: [-6, 4, -3] },
    { type: MapPin, color: "#ef4444", pos: [7, 2, -5] },
  ];

  useFrame((state) => {
    if (icons.current) {
      icons.current.children.forEach((icon, i) => {
        icon.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5 + iconsArray[i].pos[1];
      });
    }
  });

  return (
    <group ref={icons}>
      {iconsArray.map((Icon, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={Icon.pos}>
            <boxGeometry args={[0.5, 0.5, 0.1]} />
            <meshStandardMaterial color={Icon.color} emissive={Icon.color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("services");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const services = [
    { icon: Car, title: "On-Demand Van Booking", desc: "Book vans instantly via app/website" },
    { icon: Mountain, title: "Adventure-Ready Vehicles", desc: "4×4 vans equipped for mountains" },
    { icon: Users, title: "Themed Travel Packages", desc: "Family, couples, students, corporate" },
    { icon: Tent, title: "Camping Gear Rental", desc: "Tents, sleeping bags, equipment" },
    { icon: Camera, title: "Photography Services", desc: "Professional photography & drone" },
    { icon: MapPin, title: "Local Experiences", desc: "Guides, treks, cultural experiences" },
  ];

  const packages = [
    {
      name: "Family Comfort",
      price: "PKR 120,000",
      duration: "3-4 days",
      route: "ISB → Hunza",
      features: ["Premium van", "Child seats", "Hotel partnerships", "Snacks & water"],
      color: "bg-blue-500"
    },
    {
      name: "Adventure Trekking",
      price: "PKR 150,000",
      duration: "4-5 days",
      route: "ISB → Skardu + Deosai",
      features: ["4×4 van", "Camping gear", "Trekking guide", "Night BBQ"],
      color: "bg-green-500"
    },
    {
      name: "Honeymoon Special",
      price: "PKR 90,000-140,000",
      duration: "2-3 days",
      route: "Custom Routes",
      features: ["Luxury van", "Photography", "Resort stays", "Private decor"],
      color: "bg-purple-500"
    },
  ];

  const pricing = [
    { type: "Hiace", price: "PKR 10,000-14,000/day" },
    { type: "Grand Cabin", price: "PKR 14,000-18,000/day" },
    { type: "4×4 Vans", price: "PKR 18,000-25,000/day" },
    { type: "Camping Gear", price: "PKR 3,000-5,000/day" },
    { type: "Photography", price: "PKR 10,000/trip" },
    { type: "Tour Guide", price: "PKR 4,000-8,000/day" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="fixed inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 5, 15], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, 10, -10]} intensity={0.5} color="#3b82f6" />
          
          <VanModel position={[0, 0, 0]} scale={1.2} />
          <Mountains />
          <ServiceIcons />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial opacity={0.3} />
            <meshStandardMaterial color="#1f2937" roughness={0.8} />
          </mesh>
        </Canvas>
      </div>

      <nav className="relative z-10 backdrop-blur-md bg-gray-900/50 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Tent className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Campify
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {["services", "pricing", "packages", "about"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSection === item
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-semibold hover:opacity-90 transition">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 font-semibold">Adventure Awaits</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Explore Pakistan's</span>
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                Hidden Treasures
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Modern van travel and adventure mobility service. Experience the beauty of 
              Northern & Southern Pakistan with our adventure-ready vehicles.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center">
                Start Your Journey <ChevronRight className="ml-2" />
              </button>
              <button className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-full font-semibold hover:bg-gray-700 transition">
                View Packages
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {activeSection === "services" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === "pricing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Transparent Pricing</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricing.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{item.type}</h3>
                      <span className="text-blue-400 font-bold">{item.price}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Daily/Weekly rates available</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Long Route Packages</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { route: "ISB → Hunza (3-4 days)", price: "PKR 80,000-140,000" },
                    { route: "Lahore → Swat (2-3 days)", price: "PKR 50,000-90,000" },
                    { route: "Karachi → Gwadar (2 days)", price: "PKR 60,000-100,000" },
                    { route: "ISB → Skardu (4-5 days)", price: "PKR 120,000-200,000" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                      <span>{item.route}</span>
                      <span className="font-bold text-green-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "packages" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Popular Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`rounded-2xl overflow-hidden border border-gray-700 ${
                      selectedPackage === index ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    <div className={`${pkg.color} p-6`}>
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{pkg.route}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gray-800/50">
                      <h4 className="font-semibold mb-4">Includes:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition">
                        Select Package
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "about" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Why Choose Campify?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-gray-300 mb-4">
                      To revolutionize travel in Pakistan by providing safe, comfortable, 
                      and adventure-ready mobility solutions that connect people with 
                      the country's breathtaking landscapes.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>GPS-equipped vehicles with live tracking</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>Certified drivers with mountain experience</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span>24/7 customer support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Corporate Solutions</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h4 className="font-semibold text-blue-400">Monthly Contracts</h4>
                        <p className="text-sm text-gray-400">Regular business travel solutions</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h4 className="font-semibold text-green-400">Airport Transfers</h4>
                        <p className="text-sm text-gray-400">Reliable airport pickup and drop</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h4 className="font-semibold text-purple-400">Team Outings</h4>
                        <p className="text-sm text-gray-400">Corporate retreats and team building</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-900/20 via-gray-800/50 to-green-900/20 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-4">Ready for Adventure?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Download our app to book your next adventure, browse packages, 
                and customize your travel experience.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-black rounded-lg font-semibold hover:bg-gray-900 transition flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg font-semibold hover:opacity-90 transition flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1zM8 5.5H6v13h2v-13zm4 0h-2v13h2v-13zm4 0h-2v13h2v-13zm4 0h-2v13h2v-13z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Tent className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold">Campify</h2>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Campify. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">
                Adventure travel made simple and memorable
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;