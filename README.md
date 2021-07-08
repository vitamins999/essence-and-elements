![Essence & Elements Banner Image](public/banner.webp)

Welcome to the freelance client website for _Essence & Elements_: a company specialising in selling natural healing products and services. Developed primarily with Next.js and Tailwind CSS.

## Website

[Live Website](https://www.essenceandelements.com/)

## Customer Specification

When the customer came to me, we outlined three major items that needed to be addressed with the finished site:

1. They needed to be able to advertise the three different services they offer (Tarot, Crystal Healing and Raiki).
2. They needed to be able to sell a limited range of products (bracelets and necklaces).
3. It needed to be cheap. Very cheap.

## Solutions To Problems

The most obvious solution to an e-commerce specification would have been to either create a complete fullstack e-commerce site with baskets and user accounts and a database and all that jazz (most probably a MERN or PERN stack with my skillset), or to simplify the workload and hand off most shopping functions to a solution like Shopify.

But those solutions are pricey, both through man hours to create the solution, and monthly subscription costs for APIs like Shopify, in addition to hosting. And whilst these costs can be mitigated by a lot of new businesses, these options were outside of my client's price range.

My solution? Simplify everything and create a frontend only website. No backend, no database. Just a list of all the products they offer (stored as a simple Javascript Object in a data folder) with a link to buy the item that redirects to an Etsy page for the item (which the client had already created). The amount of different items is very small and does not change very often, making this solution have very little overhead.

As the client's services are personalised to the customer, and the client wanted to communicate directly with their customers through email, the pages for services were simplified to each having their own contact form that emails the client with all the necessary information the client would want from their customer. This allows the client to arrange payment for their services on their own (and allow for easy scaling up in the future to include integrated Paypal functions in the website after the form submittal, if the client wishes to pay for more work).

## Hosting

To further reduce costs, the website is hosted on Netlify. As a frontend only website, this was completely viable, and meant the client did not have to pay for hosting.

Furthermore, Netlify offer serverless functions for contact forms, simplifying everything even further.

## Technology Used

- Next.js
- Tailwind CSS
- Framer Motion

## Run Locally

Clone the project

```bash
  git clone https://github.com/vitamins999/essence-and-elements.git
```

Go to the project directory

```bash
  cd essence-and-elements
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Authors

- [Jools Barnett](https://www.github.com/vitamins999)
