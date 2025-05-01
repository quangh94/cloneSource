const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

async function fetchAPI(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    }
  };

  const response = await fetch(`${API_URL}/api${endpoint}`, mergedOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export const apiClient = {
  // Purchase Items
  getPurchaseItems: () => fetchAPI('/purchase-items'),

  // High Value Products
  getHighValueProducts: () => fetchAPI('/hight-value-products'),

  // Service Stats
  getServiceStats: () => fetchAPI('/service-stats'),

  // Products
  getProducts: () => fetchAPI('/products'),
  getProduct: (id) => fetchAPI(`/products/${id}`),
  createProduct: (data) => fetchAPI('/products', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateProduct: (id, data) => fetchAPI(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteProduct: (id) => fetchAPI(`/products/${id}`, {
    method: 'DELETE',
  }),

  // Categories
  getCategories: () => fetchAPI('/categories'),
  getCategory: (id) => fetchAPI(`/categories/${id}`),

  // Auth
  login: (credentials) => fetchAPI('/auth/local', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  register: (userData) => fetchAPI('/auth/local/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  // User
  getMe: () => fetchAPI('/users/me'),
  updateMe: (data) => fetchAPI('/users/me', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),

  // Recent Sales
  getRecentSales: () => fetchAPI('/recent-sales'),
}; 