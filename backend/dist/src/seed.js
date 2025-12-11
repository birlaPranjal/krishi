import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { Product } from './models/product.model.js';
// Load environment variables
dotenv.config();
// Sample product data (first 50 products from frontend)
const sampleProducts = [
    {
        id: '1',
        name: 'HUBEL - Humic Acid 98% Potassium Humate, Suitable for All Crops, Enhances Root Mass, Brix Level, and Plant Growth',
        brand: 'Noble Crop Science',
        rating: 4.68,
        reviews: 467,
        originalPrice: 670,
        currentPrice: 261,
        discount: 409,
        discountPercent: 61,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/3748729181735026400.webp',
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/b019300ec1dcd5f9fb609b000e8b603c-12-24-24-14-43-03.webp',
        ],
        variants: [
            { name: '300 gm', quantity: '300 Gm x 1 Qty', price: 261, inStock: true, isBestSeller: true },
            { name: '600 gm', quantity: '300 Gm x 2 Qty', price: 387, inStock: true, isBestSeller: true },
            { name: '900 gm', quantity: '300 Gm x 3 Qty', price: 530, inStock: true, isBestSeller: true },
        ],
        description: "HUBEL Humic Acid 98% is Farmer's First Choice for soil and crop health. It is a combination of Super Potassium Humate and Fulvic Acid.",
        technicalComposition: 'Super Potassium Humate 98% (Humic Acid+ Fulvic Acid+ K2O)',
        suitableCrops: 'HUBEL- Humic Acid 98% is ideal for all crops, including Sugarcane, Cereals, Pulses, Oil Seeds, Fibrous Plants, Vegetables, Fruits, Flowers, Spices, Cash Crops, Plantation and medicinal Crops, and Kitchen Gardening.',
        isBestSeller: true,
    },
    {
        id: '2',
        name: 'Pellot - Paclobutrazol 23% SC Plant Growth Regulator, Ideal for Mango and Other Major Vegetable Crops',
        brand: 'KRISHANSHECLAT AGROXGLOBAL Trade Link Private Limited',
        rating: 4.49,
        reviews: 242,
        originalPrice: 3740,
        currentPrice: 1244,
        discount: 2496,
        discountPercent: 66,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/5099926071733209484.webp',
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/9191f2a34fd6415dddf08aa6205ee1fc-12-03-24-12-34-20.webp',
        ],
        variants: [
            { name: '500 ml', quantity: '500 ML x 1 Qty', price: 668, inStock: true, isBestSeller: true },
            { name: '1 liter', quantity: '500 ML x 2 Qty', price: 1244, inStock: true, isBestSeller: true },
            { name: '2 liter', quantity: '500 ML x 4 Qty', price: 2442, inStock: true },
        ],
        description: 'Pellot Paclobutrazol 23% SC is a growth regulator that increases the overall growth of the crops. The chemical content produces healthy flowers and fruits, producing higher yields.',
        technicalComposition: 'Paclobutrazol 23% SC',
        suitableCrops: 'Pellot plant growth regulator is suitable for mangoes, onions, carrots, garlic, groundnuts, cashew nuts, potatoes, soybeans, black gram, peas, green gram, chili, tomatoes, cauliflower, sponge gourds, brinjal, and all other major vegetable crops and trees.',
        isBestSeller: true,
    },
    {
        id: '3',
        name: 'Clorentis Insecticide - Chlorantraniliprole 18.5% SC',
        brand: 'KRISHANSHECLAT AGROXGLOBAL Trade Link Private Limited',
        rating: 4.57,
        reviews: 303,
        originalPrice: 460,
        currentPrice: 217,
        discount: 243,
        discountPercent: 52,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/8301106561733208381.webp',
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/827c90c964e22b573b46305e9164b616-12-03-24-12-15-40.webp',
        ],
        variants: [
            { name: '30 ml', quantity: '30 ML X 1 Qty', price: 217, inStock: true, isBestSeller: true },
            { name: '60 ml', quantity: '30 ML x 2 Qty', price: 306, inStock: true, isBestSeller: true },
            { name: '150 ml', quantity: '30 ML x 5 Qty', price: 599, inStock: true },
        ],
        description: 'Clorentis Insecticide - Chlorantraniliprole 18.5% SC is an effective insecticide for controlling various pests in crops.',
        technicalComposition: 'Chlorantraniliprole 18.5% SC',
        suitableCrops: 'Suitable for all major crops including vegetables, fruits, and cereals.',
        isBestSeller: true,
    },
    {
        id: '4',
        name: 'Urea Fertilizer - 46% Nitrogen, High Quality Agricultural Grade',
        brand: 'Agri Solutions',
        rating: 4.5,
        reviews: 150,
        originalPrice: 1200,
        currentPrice: 850,
        discount: 350,
        discountPercent: 29,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/urea-fertilizer.webp',
        ],
        variants: [
            { name: '50 kg', quantity: '50 Kg x 1 Bag', price: 850, inStock: true, isBestSeller: true },
            { name: '100 kg', quantity: '50 Kg x 2 Bags', price: 1600, inStock: true },
        ],
        description: 'High quality urea fertilizer with 46% nitrogen content, ideal for all crops to promote healthy growth and high yields.',
        technicalComposition: 'Urea 46% N',
        suitableCrops: 'Suitable for all crops including rice, wheat, cotton, sugarcane, and vegetables.',
        isBestSeller: false,
    },
    {
        id: '5',
        name: 'NPK 19:19:19 Water Soluble Fertilizer',
        brand: 'Crop Care',
        rating: 4.6,
        reviews: 200,
        originalPrice: 950,
        currentPrice: 720,
        discount: 230,
        discountPercent: 24,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/npk-fertilizer.webp',
        ],
        variants: [
            { name: '1 kg', quantity: '1 Kg x 1 Pack', price: 720, inStock: true, isBestSeller: true },
            { name: '5 kg', quantity: '1 Kg x 5 Packs', price: 3400, inStock: true },
            { name: '25 kg', quantity: '1 Kg x 25 Packs', price: 16000, inStock: true },
        ],
        description: 'Balanced NPK fertilizer with equal proportions of Nitrogen, Phosphorus, and Potassium for comprehensive plant nutrition.',
        technicalComposition: 'NPK 19:19:19',
        suitableCrops: 'Ideal for all crops, especially vegetables, fruits, and flowers.',
        isBestSeller: true,
    },
    {
        id: '6',
        name: 'Glyphosate 41% SL Herbicide - Non-Selective Weed Killer',
        brand: 'Weed Control Pro',
        rating: 4.4,
        reviews: 180,
        originalPrice: 650,
        currentPrice: 480,
        discount: 170,
        discountPercent: 26,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/glyphosate-herbicide.webp',
        ],
        variants: [
            { name: '500 ml', quantity: '500 ML x 1 Bottle', price: 480, inStock: true, isBestSeller: true },
            { name: '1 liter', quantity: '500 ML x 2 Bottles', price: 920, inStock: true },
            { name: '5 liter', quantity: '500 ML x 10 Bottles', price: 4400, inStock: true },
        ],
        description: 'Effective non-selective herbicide for controlling a wide range of weeds in agricultural fields.',
        technicalComposition: 'Glyphosate 41% SL',
        suitableCrops: 'Suitable for use in all crops before planting or during fallow periods.',
        isBestSeller: false,
    },
    {
        id: '7',
        name: 'Mancozeb 75% WP Fungicide - Broad Spectrum Disease Control',
        brand: 'Crop Shield',
        rating: 4.55,
        reviews: 220,
        originalPrice: 580,
        currentPrice: 420,
        discount: 160,
        discountPercent: 28,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/mancozeb-fungicide.webp',
        ],
        variants: [
            { name: '250 gm', quantity: '250 Gm x 1 Pack', price: 420, inStock: true, isBestSeller: true },
            { name: '500 gm', quantity: '250 Gm x 2 Packs', price: 800, inStock: true },
            { name: '1 kg', quantity: '250 Gm x 4 Packs', price: 1500, inStock: true },
        ],
        description: 'Broad spectrum fungicide for controlling various fungal diseases in crops.',
        technicalComposition: 'Mancozeb 75% WP',
        suitableCrops: 'Effective for vegetables, fruits, cereals, and other crops.',
        isBestSeller: true,
    },
    {
        id: '8',
        name: 'DAP Fertilizer - Diammonium Phosphate 18:46:0',
        brand: 'Fertilizer Plus',
        rating: 4.65,
        reviews: 300,
        originalPrice: 1400,
        currentPrice: 1100,
        discount: 300,
        discountPercent: 21,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/dap-fertilizer.webp',
        ],
        variants: [
            { name: '50 kg', quantity: '50 Kg x 1 Bag', price: 1100, inStock: true, isBestSeller: true },
            { name: '100 kg', quantity: '50 Kg x 2 Bags', price: 2100, inStock: true },
        ],
        description: 'High quality DAP fertilizer with excellent phosphorus and nitrogen content for root development and plant growth.',
        technicalComposition: 'DAP 18:46:0',
        suitableCrops: 'Ideal for all crops, especially during early growth stages.',
        isBestSeller: true,
    },
    {
        id: '9',
        name: 'Imidacloprid 17.8% SL Insecticide - Systemic Pest Control',
        brand: 'Pest Guard',
        rating: 4.5,
        reviews: 190,
        originalPrice: 520,
        currentPrice: 380,
        discount: 140,
        discountPercent: 27,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/imidacloprid-insecticide.webp',
        ],
        variants: [
            { name: '100 ml', quantity: '100 ML x 1 Bottle', price: 380, inStock: true, isBestSeller: true },
            { name: '250 ml', quantity: '100 ML x 2.5 Bottles', price: 900, inStock: true },
            { name: '500 ml', quantity: '100 ML x 5 Bottles', price: 1700, inStock: true },
        ],
        description: 'Systemic insecticide for controlling sucking pests like aphids, whiteflies, and thrips.',
        technicalComposition: 'Imidacloprid 17.8% SL',
        suitableCrops: 'Suitable for vegetables, fruits, cotton, and other crops.',
        isBestSeller: false,
    },
    {
        id: '10',
        name: 'Boron 20% Micronutrient Fertilizer - Essential for Plant Growth',
        brand: 'Micro Nutrients',
        rating: 4.6,
        reviews: 175,
        originalPrice: 450,
        currentPrice: 320,
        discount: 130,
        discountPercent: 29,
        images: [
            'https://dujjhct8zer0r.cloudfront.net/media/prod_image/boron-fertilizer.webp',
        ],
        variants: [
            { name: '500 gm', quantity: '500 Gm x 1 Pack', price: 320, inStock: true, isBestSeller: true },
            { name: '1 kg', quantity: '500 Gm x 2 Packs', price: 600, inStock: true },
            { name: '5 kg', quantity: '500 Gm x 10 Packs', price: 2800, inStock: true },
        ],
        description: 'Essential micronutrient fertilizer containing 20% boron for healthy plant growth and development.',
        technicalComposition: 'Boron 20%',
        suitableCrops: 'Essential for all crops, especially oilseeds, fruits, and vegetables.',
        isBestSeller: true,
    },
];
/**
 * Generate a slug from product name
 */
function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
/**
 * Generate a unique SKU
 */
function generateSKU(productId, variantName) {
    const cleanVariant = variantName.replace(/\s+/g, '').toUpperCase();
    return `PROD-${productId}-${cleanVariant}`;
}
/**
 * Transform frontend product data to backend schema
 */
function transformProduct(frontendProduct) {
    const slug = generateSlug(frontendProduct.name);
    const basePrice = frontendProduct.originalPrice;
    const salePrice = frontendProduct.currentPrice;
    const discountPercent = frontendProduct.discountPercent || 0;
    // Transform variants
    const variants = frontendProduct.variants.map((variant, index) => ({
        name: variant.name,
        sku: generateSKU(frontendProduct.id, variant.name),
        price: variant.price,
        compareAtPrice: variant.price < basePrice ? basePrice : undefined,
        stockQuantity: variant.inStock ? 100 : 0,
        isActive: variant.inStock !== false,
        isDefault: index === 0,
        displayOrder: index,
    }));
    // Calculate total stock from variants
    const totalStock = variants.reduce((sum, v) => sum + (v.stockQuantity || 0), 0);
    return {
        name: frontendProduct.name,
        slug: `${slug}-${frontendProduct.id}`,
        sku: `PROD-${frontendProduct.id}`,
        shortDescription: frontendProduct.description?.substring(0, 200) || '',
        description: frontendProduct.description || '',
        basePrice,
        salePrice,
        discountPercent,
        stockQuantity: totalStock,
        status: totalStock > 0 ? 'ACTIVE' : 'OUT_OF_STOCK',
        isFeatured: frontendProduct.isBestSeller || false,
        isBestseller: frontendProduct.isBestSeller || false,
        isNewArrival: false,
        images: frontendProduct.images || [],
        technicalComposition: frontendProduct.technicalComposition || '',
        suitableCrops: frontendProduct.suitableCrops || '',
        averageRating: frontendProduct.rating || 0,
        reviewCount: frontendProduct.reviews || 0,
        viewCount: 0,
        orderCount: 0,
        searchKeywords: [
            frontendProduct.name,
            frontendProduct.brand,
            ...(frontendProduct.technicalComposition ? [frontendProduct.technicalComposition] : []),
        ],
        tags: [frontendProduct.brand, 'agriculture', 'farming'],
        publishedAt: new Date(),
        variants,
    };
}
/**
 * Seed products into database
 */
async function seedProducts() {
    try {
        console.log('🌱 Starting product seeding...\n');
        // Connect to database
        await connectDB();
        // Clear existing products (optional - comment out if you want to keep existing data)
        const existingCount = await Product.countDocuments();
        if (existingCount > 0) {
            console.log(`⚠️  Found ${existingCount} existing products in database.`);
            console.log('   Skipping deletion to preserve existing data.\n');
        }
        // Transform and insert products
        const productsToInsert = sampleProducts.map(transformProduct);
        let insertedCount = 0;
        let skippedCount = 0;
        for (const productData of productsToInsert) {
            try {
                // Check if product with same slug or SKU already exists
                const existing = await Product.findOne({
                    $or: [
                        { slug: productData.slug },
                        { sku: productData.sku },
                    ],
                });
                if (existing) {
                    console.log(`⏭️  Skipping: ${productData.name} (already exists)`);
                    skippedCount++;
                    continue;
                }
                const product = new Product(productData);
                await product.save();
                console.log(`✅ Inserted: ${productData.name}`);
                insertedCount++;
            }
            catch (error) {
                if (error.code === 11000) {
                    // Duplicate key error
                    console.log(`⏭️  Skipping: ${productData.name} (duplicate)`);
                    skippedCount++;
                }
                else {
                    console.error(`❌ Error inserting ${productData.name}:`, error.message);
                }
            }
        }
        console.log('\n📊 Seeding Summary:');
        console.log(`   ✅ Inserted: ${insertedCount} products`);
        console.log(`   ⏭️  Skipped: ${skippedCount} products`);
        console.log(`   📦 Total: ${productsToInsert.length} products processed\n`);
        // Close database connection
        await mongoose.connection.close();
        console.log('✅ Database connection closed');
        console.log('🎉 Seeding completed successfully!\n');
        process.exit(0);
    }
    catch (error) {
        console.error('❌ Seeding failed:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}
// Run the seed function
seedProducts();
//# sourceMappingURL=seed.js.map