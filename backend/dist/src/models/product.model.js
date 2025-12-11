import mongoose from 'mongoose';
const variantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: String }, // e.g., "600 gm", "3 kg"
    sku: { type: String }, // Optional, can be auto-generated
    barcode: { type: String },
    attributes: { type: Map, of: String },
    price: { type: Number }, // Can be null
    compareAtPrice: { type: Number },
    stockQuantity: { type: Number, default: 0 },
    inStock: { type: mongoose.Schema.Types.Mixed }, // Can be boolean or null
    isActive: { type: Boolean, default: true },
    isDefault: { type: Boolean, default: false },
    isBestSeller: { type: mongoose.Schema.Types.Mixed }, // Can be boolean or null
    displayOrder: { type: Number, default: 0 },
    imageUrl: { type: String }
}, { timestamps: true });
// Key Feature Schema
const keyFeatureSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
}, { _id: false });
// Dosage Schema
const dosageSchema = new mongoose.Schema({
    spraying: { type: String },
    sugarcane: { type: String },
    soilApplication: { type: String }
}, { _id: false });
// Technical Details Schema
const technicalDetailsSchema = new mongoose.Schema({
    brand: { type: String },
    productCode: { type: String },
    countryOfOrigin: { type: String },
    category: { type: String },
    subCategory: { type: String },
    pickupAddress: { type: String },
    addressOfOrigin: { type: String }
}, { _id: false });
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    shortDescription: { type: String },
    description: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    brand: { type: mongoose.Schema.Types.Mixed }, // Can be ObjectId or String
    brandName: { type: String }, // Store brand as string (primary)
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    // Pricing fields - support both old and new structure
    basePrice: { type: Number }, // Original price (will be set from originalPrice if not provided)
    originalPrice: { type: Number }, // Original price (required via validation)
    salePrice: { type: Number }, // Current/sale price (will be set from currentPrice if not provided)
    currentPrice: { type: Number }, // Current/sale price
    costPrice: { type: Number },
    discount: { type: Number }, // Discount amount
    discountPercent: { type: Number, default: 0 },
    pricePerUnit: { type: String }, // e.g., "(₹87.00 /100 gm)"
    taxRate: { type: Number, default: 18.00 },
    hsnCode: { type: String },
    stockQuantity: { type: Number, default: 0 },
    lowStockThreshold: { type: Number, default: 10 },
    status: {
        type: String,
        enum: ['DRAFT', 'ACTIVE', 'INACTIVE', 'OUT_OF_STOCK', 'DISCONTINUED'],
        default: 'DRAFT'
    },
    isFeatured: { type: Boolean, default: false },
    isBestseller: { type: mongoose.Schema.Types.Mixed }, // Can be boolean or null
    isBestSeller: { type: mongoose.Schema.Types.Mixed }, // Alias for isBestseller
    isNewArrival: { type: Boolean, default: false },
    freeDelivery: { type: mongoose.Schema.Types.Mixed }, // Can be boolean or null
    weight: { type: Number },
    weightUnit: { type: String, default: 'kg' },
    images: [{ type: String }],
    videos: [{ type: String }],
    technicalComposition: { type: String },
    keyFeatures: [keyFeatureSchema], // Changed to support title and description
    specifications: { type: Map, of: String },
    safetyTips: [{ type: String }],
    suitableCrops: { type: String },
    dosage: dosageSchema, // New dosage field
    note: { type: String }, // New note field
    technicalDetails: technicalDetailsSchema, // New technical details field
    phoneNumber: { type: String }, // New phone number field
    metaTitle: { type: String },
    metaDescription: { type: String },
    viewCount: { type: Number, default: 0 },
    orderCount: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }, // Alias for averageRating
    reviewCount: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 }, // Alias for reviewCount
    searchKeywords: [{ type: String }],
    tags: [{ type: String }],
    publishedAt: { type: Date },
    deletedAt: { type: Date },
    variants: [variantSchema]
}, { timestamps: true });
export const Product = mongoose.model('Product', productSchema);
//# sourceMappingURL=product.model.js.map