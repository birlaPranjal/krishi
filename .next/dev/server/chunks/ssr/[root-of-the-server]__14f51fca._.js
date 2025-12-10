module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/api/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Authentication API Client
 */ __turbopack_context__.s([
    "getProfile",
    ()=>getProfile,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Backend API base URL - Update this to match your backend port
// Default: http://localhost:5000 (matches backend default port)
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
const register = async (data)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/auth/register`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // Re-throw with better error information
        if (error.response) {
            // Server responded with error
            const apiError = new Error(error.response.data?.message || 'Registration failed');
            apiError.response = error.response;
            throw apiError;
        } else if (error.request) {
            // Request made but no response
            throw new Error('Network error. Please check your connection.');
        } else {
            // Something else happened
            throw error;
        }
    }
};
const login = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/auth/login`, data);
    return response.data;
};
const logout = async ()=>{
    try {
        const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/auth/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Logout error:', error);
    } finally{
        // Clear tokens regardless of API call success
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
};
const getProfile = async ()=>{
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_BASE_URL}/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
}),
"[project]/contexts/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/auth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Check if user is authenticated on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile"])();
                    if (response.success && response.data) {
                        setUser(response.data);
                    }
                } catch (error) {
                    console.error('Auth check failed:', error);
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                }
            }
            setLoading(false);
        };
        checkAuth();
    }, []);
    const login = async (email, password)=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["login"])({
                email,
                password
            });
            if (response.success && response.data) {
                setUser(response.data.user);
                // Store tokens if provided
                if (response.data.tokens) {
                    localStorage.setItem('accessToken', response.data.tokens.accessToken);
                    localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
                }
                router.push('/');
            }
        } catch (error) {
            throw new Error(error.message || 'Login failed');
        }
    };
    const register = async (data)=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["register"])(data);
            if (response.success && response.data) {
                setUser(response.data.user);
                // Store tokens if provided
                if (response.data.tokens) {
                    localStorage.setItem('accessToken', response.data.tokens.accessToken);
                    localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
                }
                router.push('/');
            }
        } catch (error) {
            throw new Error(error.message || 'Registration failed');
        }
    };
    const logout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])();
        } catch (error) {
            console.error('Logout error:', error);
        } finally{
            setUser(null);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            router.push('/');
        }
    };
    const refreshUser = async ()=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile"])();
            if (response.success && response.data) {
                setUser(response.data);
            }
        } catch (error) {
            console.error('Failed to refresh user:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            isAuthenticated: !!user,
            login,
            register,
            logout,
            refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/lib/api/cart.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cart API Client
 */ __turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "clearCart",
    ()=>clearCart,
    "getCart",
    ()=>getCart,
    "removeFromCart",
    ()=>removeFromCart,
    "updateCartItem",
    ()=>updateCartItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Backend API base URL - Update this to match your backend port
// Default: http://localhost:5000 (matches backend default port)
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
const getAuthHeaders = ()=>{
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    return {
        Authorization: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''
    };
};
const getCart = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_BASE_URL}/cart`, {
        headers: getAuthHeaders()
    });
    return response.data;
};
const addToCart = async (productId, variantId, quantity = 1, variantName)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/cart/items`, {
        productId,
        variantId,
        variantName,
        quantity
    }, {
        headers: getAuthHeaders()
    });
    return response.data;
};
const updateCartItem = async (productId, quantity, variantId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${API_BASE_URL}/cart/items/${productId}`, {
        quantity,
        variantId
    }, {
        headers: getAuthHeaders()
    });
    return response.data;
};
const removeFromCart = async (productId, variantId)=>{
    const params = variantId ? `?variantId=${variantId}` : '';
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`${API_BASE_URL}/cart/items/${productId}${params}`, {
        headers: getAuthHeaders()
    });
    return response.data;
};
const clearCart = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`${API_BASE_URL}/cart`, {
        headers: getAuthHeaders()
    });
    return response.data;
};
}),
"[project]/contexts/CartContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/cart.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const hasSyncedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // Prevent multiple syncs on login
    // Helper function to check if a string is a valid MongoDB ObjectId
    const isValidObjectId = (id)=>{
        return /^[0-9a-fA-F]{24}$/.test(id);
    };
    // Load cart from localStorage (for both guest and authenticated users as backup)
    const loadCartFromLocalStorage = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
    };
    // Save cart to localStorage (always save as backup)
    const saveCartToLocalStorage = (cartItems)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    // Load cart on mount and when auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadCart = async ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        };
        loadCart();
    }, [
        isAuthenticated,
        authLoading
    ]);
    // Save cart to localStorage whenever it changes (for both guest and authenticated users as backup)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        items,
        isLoaded
    ]);
    // Sync cart to backend when user logs in (only once)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated && isLoaded && items.length > 0 && !authLoading && !hasSyncedRef.current) {
            // Only sync if we have items and user just logged in (prevent multiple syncs)
            hasSyncedRef.current = true;
            const syncOnce = async ()=>{
                await syncCartToBackend();
            };
            syncOnce();
        }
        // Reset sync flag when user logs out
        if (!isAuthenticated) {
            hasSyncedRef.current = false;
        }
    }, [
        isAuthenticated,
        isLoaded,
        items.length,
        authLoading
    ]);
    const syncCartToBackend = async ()=>{
        if (!isAuthenticated) return;
        try {
            // Sync each item to backend (only if productId is a valid ObjectId)
            for (const item of items){
                // Skip items with invalid ObjectIds (mock data)
                if (!isValidObjectId(item.productId)) {
                    console.warn(`Skipping sync for product ${item.productId} - not a valid MongoDB ObjectId`);
                    continue;
                }
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCart"])(item.productId, null, item.count, item.variant || undefined);
                } catch (error) {
                    console.error('Error syncing cart item:', error);
                }
            }
        } catch (error) {
            console.error('Error syncing cart:', error);
        }
    };
    const syncCart = async ()=>{
        if (!isAuthenticated) return;
        try {
            setLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])();
            if (response.success && response.data?.items && response.data.items.length > 0) {
                const cartItems = response.data.items.filter((item)=>item.product) // Filter out items with deleted products
                .map((item)=>{
                    const product = item.product;
                    const productId = product?._id?.toString() || product?.toString() || '';
                    // Find variant name if variantId exists
                    let variantName = '';
                    if (item.variantId && product?.variants) {
                        const variant = product.variants.find((v)=>v._id?.toString() === item.variantId || v._id === item.variantId);
                        variantName = variant?.name || '';
                    }
                    return {
                        productId,
                        name: product?.name || '',
                        brand: product?.brand?.name || '',
                        image: product?.images?.[0] || '',
                        variant: variantName,
                        quantity: item.quantity?.toString() || '1',
                        price: Number(item.unitPrice) || 0,
                        originalPrice: Number(item.unitPrice) || 0,
                        count: item.quantity || 1
                    };
                }).filter((item)=>item.productId); // Filter out invalid items
                setItems(cartItems);
                saveCartToLocalStorage(cartItems); // Save to localStorage as backup
            } else {
                // Backend cart is empty, try localStorage
                const localCart = loadCartFromLocalStorage();
                if (localCart.length > 0) {
                    setItems(localCart);
                } else {
                    setItems([]);
                }
            }
            setLoading(false);
        } catch (error) {
            console.error('Error syncing cart:', error);
            setLoading(false);
        }
    };
    const addToCart = async (item)=>{
        // If authenticated and productId is valid, add to backend first
        if (isAuthenticated && isValidObjectId(item.productId)) {
            try {
                setLoading(true);
                // Add to backend first
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCart"])(item.productId, null, 1, item.variant || undefined);
                // After successful backend add, reload cart from backend to ensure sync
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])();
                if (response.success && response.data?.items) {
                    const backendCartItems = response.data.items.filter((item)=>item.product).map((item)=>{
                        const product = item.product;
                        const productId = product?._id?.toString() || product?.toString() || '';
                        let variantName = '';
                        if (item.variantId && product?.variants) {
                            const variant = product.variants.find((v)=>v._id?.toString() === item.variantId || v._id === item.variantId);
                            variantName = variant?.name || '';
                        }
                        return {
                            productId,
                            name: product?.name || '',
                            brand: product?.brand?.name || '',
                            image: product?.images?.[0] || '',
                            variant: variantName,
                            quantity: item.quantity?.toString() || '1',
                            price: Number(item.unitPrice) || 0,
                            originalPrice: Number(item.unitPrice) || 0,
                            count: item.quantity || 1
                        };
                    }).filter((item)=>item.productId);
                    setItems(backendCartItems);
                    saveCartToLocalStorage(backendCartItems);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error adding to cart:', error);
                setLoading(false);
                // Show error to user
                const errorMessage = error?.response?.data?.message || error?.message || 'Failed to add item to cart';
                alert(errorMessage);
                throw error; // Re-throw so calling code can handle it
            }
        } else {
            // For guest users or mock data, update local state and localStorage
            setItems((prevItems)=>{
                const existingItem = prevItems.find((i)=>i.productId === item.productId && i.variant === item.variant);
                let updatedItems;
                if (existingItem) {
                    updatedItems = prevItems.map((i)=>i.productId === item.productId && i.variant === item.variant ? {
                            ...i,
                            count: i.count + 1
                        } : i);
                } else {
                    updatedItems = [
                        ...prevItems,
                        {
                            ...item,
                            count: 1
                        }
                    ];
                }
                saveCartToLocalStorage(updatedItems);
                return updatedItems;
            });
        }
    };
    const removeFromCart = async (productId, variant)=>{
        // If authenticated and productId is valid, remove from backend first
        if (isAuthenticated && isValidObjectId(productId)) {
            try {
                setLoading(true);
                // Remove from backend first
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeFromCart"])(productId, variant || undefined);
                // After successful backend removal, reload cart from backend to ensure sync
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])();
                if (response.success && response.data?.items) {
                    const backendCartItems = response.data.items.filter((item)=>item.product).map((item)=>{
                        const product = item.product;
                        const productId = product?._id?.toString() || product?.toString() || '';
                        let variantName = '';
                        if (item.variantId && product?.variants) {
                            const variant = product.variants.find((v)=>v._id?.toString() === item.variantId || v._id === item.variantId);
                            variantName = variant?.name || '';
                        }
                        return {
                            productId,
                            name: product?.name || '',
                            brand: product?.brand?.name || '',
                            image: product?.images?.[0] || '',
                            variant: variantName,
                            quantity: item.quantity?.toString() || '1',
                            price: Number(item.unitPrice) || 0,
                            originalPrice: Number(item.unitPrice) || 0,
                            count: item.quantity || 1
                        };
                    }).filter((item)=>item.productId);
                    setItems(backendCartItems);
                    saveCartToLocalStorage(backendCartItems);
                } else {
                    // Backend cart is empty
                    setItems([]);
                    saveCartToLocalStorage([]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error removing from cart:', error);
                setLoading(false);
                const errorMessage = error?.response?.data?.message || error?.message || 'Failed to remove item from cart';
                alert(errorMessage);
                throw error;
            }
        } else {
            // For guest users or mock data, update local state
            setItems((prevItems)=>{
                const updatedItems = prevItems.filter((i)=>!(i.productId === productId && i.variant === variant));
                saveCartToLocalStorage(updatedItems);
                return updatedItems;
            });
        }
    };
    const updateQuantity = async (productId, variant, count)=>{
        if (count <= 0) {
            await removeFromCart(productId, variant);
            return;
        }
        // If authenticated and productId is valid, update backend first
        if (isAuthenticated && isValidObjectId(productId)) {
            try {
                setLoading(true);
                // Update backend first
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCartItem"])(productId, count, variant || undefined);
                // After successful backend update, reload cart from backend to ensure sync
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])();
                if (response.success && response.data?.items) {
                    const backendCartItems = response.data.items.filter((item)=>item.product).map((item)=>{
                        const product = item.product;
                        const productId = product?._id?.toString() || product?.toString() || '';
                        let variantName = '';
                        if (item.variantId && product?.variants) {
                            const variant = product.variants.find((v)=>v._id?.toString() === item.variantId || v._id === item.variantId);
                            variantName = variant?.name || '';
                        }
                        return {
                            productId,
                            name: product?.name || '',
                            brand: product?.brand?.name || '',
                            image: product?.images?.[0] || '',
                            variant: variantName,
                            quantity: item.quantity?.toString() || '1',
                            price: Number(item.unitPrice) || 0,
                            originalPrice: Number(item.unitPrice) || 0,
                            count: item.quantity || 1
                        };
                    }).filter((item)=>item.productId);
                    setItems(backendCartItems);
                    saveCartToLocalStorage(backendCartItems);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error updating cart:', error);
                setLoading(false);
                const errorMessage = error?.response?.data?.message || error?.message || 'Failed to update cart';
                alert(errorMessage);
                throw error;
            }
        } else {
            // For guest users or mock data, update local state
            setItems((prevItems)=>{
                const updatedItems = prevItems.map((i)=>i.productId === productId && i.variant === variant ? {
                        ...i,
                        count
                    } : i);
                saveCartToLocalStorage(updatedItems);
                return updatedItems;
            });
        }
    };
    const clearCart = async ()=>{
        // Update local state immediately
        setItems([]);
        saveCartToLocalStorage([]);
        // Sync with backend if authenticated
        if (isAuthenticated) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCart"])();
            } catch (error) {
                console.error('Error clearing cart:', error);
            }
        }
    };
    const getTotalItems = ()=>{
        return items.reduce((total, item)=>total + item.count, 0);
    };
    const getTotalPrice = ()=>{
        return items.reduce((total, item)=>total + item.price * item.count, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            loading,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getTotalItems,
            getTotalPrice,
            syncCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/CartContext.tsx",
        lineNumber: 512,
        columnNumber: 5
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14f51fca._.js.map