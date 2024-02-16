# Streetwear-Web

## Concept
An online destination for streetwear enthusiasts, offering wide range of products presented in a visually appealing and user-friendly manner.


## Instruction
- When the page is open, you will see on the top of the screen, from left to right. Logo, Nav bar (Home, about, menu, contact, etc.) two icons (profile, cart) and black circle (darkmode).
- When you click on the profile icon, it will redirect you to the profile page. Click on the shopping cart, and it open the shopping cart. Click on the black circle with white outer layer, and it will change the background colour to white.
- Profile page: There's a sign in/ sign up form, click on either one and it will change form. It will also pop up error messages for any incorrect input into the contact imformation form, before signing in or signing up.
- Cart tab: In the shopping cart, there's items with name, price and quantity (plus and minus). Click on the plus or minus and it will display the price and the total price and beside will display discount figure. Below the tab are close and check out button. click close to close the tab.
- Review page: In the review section, scroll down to 'Give us a review' button, click on it and it will redirect to review page. On the review page, there will be a few seconds loading screen, after it fade you will see emoji, slider, comment box and submit button. Use the slider to change star rating and the emoji will change depending on how many stars you are giving. Click on submit button and it will redirect you to the profile page to sign in/ sign up.
- Menu section: Each items has 'add to cart' button and above it there's quantity number. you can click minus or plus sign for change in quantity.

## Features
- **Cart Functionality**: The code manages the shopping cart functionality, allowing users to add items to the cart, adjust quantities, and view/update the cart.
It listens for click events on buttons related to adding items to the cart (add-to-cart buttons), incrementing (plus) and decrementing (minus) quantities, and closing the cart tab.
Quantity adjustments and additions to the cart trigger functions that update the cart's total price, including any applicable discounts based on the total price range.

- **Toggle Menu Functionality (Dark Mode)**: Toggles dark mode when the toggle button is clicked.

- **Toggle Navbar Functionality**: Toggles the navbar visibility when the menu button is clicked. This enhances user experience by providing a responsive navigation menu.

- **Redirect to Profile Page**: Listens for clicks on the user icon button and redirects users to the profile page. This feature enhances user interaction by providing name, email and passwords.

- **Redirect to Review Page**: Listens for clicks on the review button and redirects users to the review page. This feature allows users to move the slider, changing amount of star rating and adding comment in the feedback box.


## Accessing the Hosted Project
To access the hosted project, follow these steps:
1. Open your web browser.
2. Navigate to the following URL: https://dylanjb96.github.io/Streetwear-Web/
3. Explore the project and enjoy!

## Additional Information
Achieved Features:
- Quantity Adjustment: Users can increment or decrement the quantity of items in their shopping cart by clicking on the plus and minus buttons.
- Cart Total Update: The total price of items in the cart is dynamically updated as users add or remove products.
- Review Page Redirection: Users can click on the "Give Review" button to redirect to the review page.
- Registration/Login Forms: Forms for registration and login are provided, including basic form validation.
  
Not Achieved Features:
- Discount Calculation: While the basic calculation work, when it get to certain quantity and price it doesn't work properly.
- Add Item to Shopping Cart: Items in the Menu and Product can not be added to the cart when 'Add to Cart' button is clicked.
