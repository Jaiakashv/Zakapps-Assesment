# Abokichi E-Commerce Assessment Project

This is my submission for the front-end web development assessment. I built a clean, fast, and responsive e-commerce experience using plain HTML, CSS, and vanilla JavaScript (no external frameworks or libraries are required to run it).

## Key Features Implemented

### Smooth Page Navigation
*   **Home Page (`index.html`):** Clicking on any best-seller product card takes the user to the **Product Listing Page** (the 2nd slide pattern).
*   **Product Listing Page (`products.html`):** Clicking any product card dynamically navigates to the **Product Detail Page** (`product-details.html?id=ID`) with full query parameters to load the correct item.
*   **Product Detail Page (`product-details.html`):**
    *   **Add to Cart:** Clicking this increments a persistent cart count in the header (backed by `localStorage` so it doesn't reset on page refresh). It also gives a quick "Added!" visual confirmation.
    *   **Buy Now:** Instantly directs the user to the checkout confirmation screen.
*   **Order Confirmation (`order-success.html`):** Displays a success screen showing an "Order Placed Successfully!" message and automatically empties the cart.

### Interactive Filtering & Sorting (JS-Driven)
All filters run purely on JavaScript against the local mock product data:
*   **Category Filters:** Dynamically generated from the product dataset.
*   **Type Filter:** Allows filtering by *Single Pack* or *Multi Set* configurations.
*   **Flavours Filter:** Filters items dynamically by checking for specific flavor profiles (like Spicy or Mild) in names and descriptions.
*   **Rating Filters:** Added functional filters to filter items by 5 Stars, 4 Stars & above, or 3 Stars & above.
*   **Sort Options:** Allows sorting alphabetically (A-Z and Z-A) and by price (low-to-high and high-to-low).
*   **Layout Toggle:** Toggles seamlessly between **Grid View** and **List View** utilizing a clean layout modifier.

---

## Performance Optimization: Lazy Loading
To ensure maximum speed, lightweight page sizes, and clean core web vitals, I implemented native **lazy loading** (`loading="lazy"`) across all below-the-fold assets:
*   Static section images (Stories, Recipes, banners, and partner logos).
*   Footer elements (like payment logos) that don't need to load right away.
*   Dynamically rendered product list cards and detail thumbnails, ensuring images only download when they scroll near the viewport.

---

## Project Structure
```bash
├── assets/
│   └── images/               # Local icons, payment methods, logo
├── css/
│   ├── common.css            # Navigation, layout, buttons, variables, and footer
│   ├── index.css             # Hero area and homepage sections
│   ├── products.css          # Listing page toolbar, filters, list/grid toggle views
│   ├── product-details.css   # Dynamic detail view tabs and thumbnails layout
│   └── order-success.css     # Checkout success panel style
├── js/
│   └── script.js             # Shared product data model, rating utility, cart counter
├── index.html                # Home Screen
├── products.html             # Shop / Product List Screen
├── product-details.html      # Product Info Screen
├── order-success.html        # Checkout Screen
└── README.md                 # Project Documentation
```

## How to View the Project
Since this uses vanilla web tech, you can view the project in seconds without installing package dependencies:
1. click- [Zakapps Assessment](https://zakapps-assesment.vercel.app) to open the page directly in any modern browser.
