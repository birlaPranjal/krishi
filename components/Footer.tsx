import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram, 
  MessageCircle,
  CheckCircle2,
  Truck,
  Shield,
  HandCoins
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Upper Section - Dark Blue */}
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Guarantee Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-green-600 rounded-full p-2">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Guaranteed Lowest Prices</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-blue-600 rounded-full p-2">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">FREE India Wide Shipping</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-green-600 rounded-full p-2">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">SAFE SHOPPING Guarantee</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-blue-600 rounded-full p-2">
                <HandCoins className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">EASY Returns & Replacements</p>
              </div>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Equipments</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Gardening</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Crop protection</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Fertilizers</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Organic Farming</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Bulk</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Seeds</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Irrigation</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Cattle & Bird Care</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Farm Products</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Media</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Health & Wellness</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Growth Regulators</a></li>
              </ul>
            </div>

            {/* Know Us Better */}
            <div>
              <h3 className="font-bold text-lg mb-4">Know Us Better</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Why AgriBegri</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Agri Sale</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Today&apos;s Offers</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Agri Talk</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Find Commodity Prices</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Agri E-Magazines</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">How Referral works</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">AgriBegri Blog</a></li>
              </ul>
            </div>

            {/* Our Policies */}
            <div>
              <h3 className="font-bold text-lg mb-4">Our Policies</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Shipping / Delivery</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Seller Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Sell on AgriBegri</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Customer Login</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright and Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-600">
            <p className="text-sm mb-4 md:mb-0">Copyright©2025@agribegri.com. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-sm mr-2">Connect With</span>
              <div className="flex gap-3">
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Lighter Blue */}
      <div className="bg-[#4a7ba7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold mb-6">Most Searched on AgriBegri</h2>
          
          <div className="space-y-6 text-sm">
            {/* Equipments */}
            <div>
              <h3 className="font-bold mb-2">Equipments :</h3>
              <p className="text-gray-100">
                Hand Operated Tools | Spray Pump | Tarpaulin | Mulching | Brush Cutter | Weeders | Water Pump | Pond Liner | Vermi Compost Bed | Biofloc Fish Tank | Head Torch | Azolla Growing Bed | Weed Control Mat | Solar Products | Fogging Machine | Chain Saw | Crop Protection Cover | Hedge Trimmer | Earth Auger | Other Hardware | Traps
              </p>
            </div>

            {/* Gardening */}
            <div>
              <h3 className="font-bold mb-2">Gardening :</h3>
              <p className="text-gray-100">
                Spray Pumps | Lawn Mowers | Pebbles | Accessories | Seeds | Fertilizer | Pesticides | Garden Shade Net | Coco Peat | Tools | Transplanting | Repotting Mat | Gardening Kit | Grow Bag | De oiled Cake | Flower Seeds | Fertilizer Blend
              </p>
            </div>

            {/* Crop protection */}
            <div>
              <h3 className="font-bold mb-2">Crop protection :</h3>
              <p className="text-gray-100">
                Insecticides | Herbicides/Weedicide | Fungicides | Bactericides | Sticking/Wetting Agent | Animal Repellent | Nematicide | Combo Product | Crop Special Products
              </p>
            </div>

            {/* Fertilizers */}
            <div>
              <h3 className="font-bold mb-2">Fertilizers :</h3>
              <p className="text-gray-100">
                Biological Fertilizers | Micronutrient Fertilizers | Organic Fertilizers | Liquid Fertilizers | Soil Fertilizers | Bulk Fertilizers | Water Fertilizers | Chelated Micronutrient
              </p>
            </div>

            {/* Organic Farming */}
            <div>
              <h3 className="font-bold mb-2">Organic Farming :</h3>
              <p className="text-gray-100">
                Organic Fertilizer | Viricides | Neem Oil | Waste Decomposer | Vermi Compost | Organic Remedial Inputs
              </p>
            </div>

            {/* Seeds */}
            <div>
              <h3 className="font-bold mb-2">Seeds :</h3>
              <p className="text-gray-100">
                Vegetable | Natural | Onion | Cotton Seeds | Field Crop | Exotic Vegetable | Fruit Crop | Root And Tuber Crop | Leafy Vegetable | Marigold
              </p>
            </div>

            {/* Irrigation */}
            <div>
              <h3 className="font-bold mb-2">Irrigation :</h3>
              <p className="text-gray-100">
                Sprinkler | Drip Irrigation Accessories | Pipe & Fitting | Drip Irrigation Kit | Rain Pipe
              </p>
            </div>

            {/* Cattle & Bird Care */}
            <div>
              <h3 className="font-bold mb-2">Cattle & Bird Care :</h3>
              <p className="text-gray-100">
                Fodder Seed | Mineral Mixture | Aquaculture Feed Additives | Goat And Sheep Care | Poultry Feed Supplements | Swine Supplement | Silage bag(Murghas Bag)
              </p>
            </div>

            {/* Growth Promoters */}
            <div>
              <h3 className="font-bold mb-2">Growth Promoters :</h3>
              <p className="text-gray-100">
                pH balancer | Humic Acid | PGR / PGP / PGH | Humic & Fulvic Acid | Flowering Stimulant
              </p>
            </div>

            {/* Insecticides */}
            <div>
              <h3 className="font-bold mb-2">Insecticides :</h3>
              <p className="text-gray-100">
                Exylon Thiazol Thiamethoxam 30% FS Insecticide, Efficient Seed Treatment For Early Pest Control / Katyayani Docter Thiamethoxam 30% FS Insecticide, For Systemic Seed Treatment / Mahindra Summit Attila Gold Thiamethoxam 30% FS Insecticide, Use For Seed Treatment and Sucking Pests / United Chemical Unitara FS Thiamethoxam 30% FS Insecticide, Systemic Insecticide / EBS Thiomaster Thiamethoxam 30% FS, Control Of A Wide Range Of Early Season Sucking And Chewing, Leaf-Feeding And Soil Dwelling Insect Pests
              </p>
            </div>

            {/* Agriculture Equipments */}
            <div>
              <h3 className="font-bold mb-2">Agriculture Equipments :</h3>
              <p className="text-gray-100">
                WAVAR A4 Sticky Trap, 12 x 8 Inch, 3mm Thickness, Eco Friendly (Combo Of 20 Yellow + 5 Blue) / WAVAR Bactrocera Dorsalis Macphil Trap, Easy To Install, Effective Fruit Fly Control / WAVAR Funnel Trap with Spodoptera Litura Lure, Efficient For Armyworm And Cutworm Pest Control In Crops / WAVAR Leucinodes Orbonalis Funnel Trap, Efficient For Brinjal Fruit Shoot Borer Pest, Effective Pest Management / WAVAR Tuta Absoluta Delta Trap, Effective For Tomato Leaf Miner Pest Control In Crops
              </p>
            </div>

            {/* Gardening Products */}
            <div>
              <h3 className="font-bold mb-2">Gardening Products :</h3>
              <p className="text-gray-100">
                Radhe Premium Silicone Thumb Cutter With Finger Protection, Plucking Device For Cutting Vegetable and Fruit Scraper (Pack of 5) / Balwaan SP-80B Li-Ion Garden Spray Pump, 12 Volt x 2.6 Amp Battery, 8 Ltr Tank Capacity, Suitable for Garden Pest Control and Agriculture / Mustard Oil Cake Powder for Healthy Plant Growth, made from premium quality cold pressed oil cakes / Green Garden Shade Net - Genuine 50% Shade, Mesh, UV Stabilized Material, HDPE Virgin Polymer
              </p>
            </div>

            {/* Trending Products */}
            <div>
              <h3 className="font-bold mb-2">Trending Products</h3>
              <p className="text-gray-100">
                Vesicular Arbuscular Mycorrhiza / Hydrogen Peroxide 30% / Crop Tonic 21 Amino Acid / Green Seaweed Extract / Spinosad 45% SC / Saprophytic Microorganisms / Active Phosphorus And Potash / Auxins: 05% w/v + Carboxylic Acid: 05% w/v + Elongation Hormones: 01% w/v / Pest Out Pest Out Sucking Pest Controller / NPK Microbial Consortia / Size Fast Plant Growth Promoter / Insta Bion Amino Acid / Chitosan 10% / Wet Gold Silicon Based Spreader / Tomato Special Growth Enhancer / Control TRM Sucking Pest Controller / Fulvic Acid 98% / Thiobacillus Spp. / Hexaconazole 4% + Carbendazim 16% SC / Brilliant Flowering Stimulant / Dr.Bacto`s Telya Kill / Bascillus Subtilis / Vesicular Arbuscular Mycorrhizae / Ferrous Sulphate 19% / Dr. Bacto`s Bactomine / Dr. Bactos Bacto DIP / Dr. Bacto`s Bacto Kit / Ampelomyces Quisqualis / Larva Lock Botanical Extracts / Capsona Growth Enhancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

