![Essence & Elements Banner Image](public/banner.webp)

Welcome to the full stack freelance client website for _Essence & Elements_: a company specialising in selling natural healing products and services.

Developed primarily with Next.js and Tailwind CSS on the frontend (this current repository), with Strapi, GraphQL and PostgreSQL on the backend ([this repository](https://github.com/vitamins999/essence-and-elements-backend)).

## Website

[Live Website](https://www.essenceandelements.org/)

## Customer Specification

When the customer came to me, we outlined three major items that needed to be addressed with the finished site:

1. They needed to be able to advertise the three different services they offer (Tarot, Crystal Healing and Reiki).
2. They needed to be able to sell a limited range of products (bracelets and necklaces).
3. It needed to be cheap. Very cheap.

## Solutions To Problems

The most obvious solution to an e-commerce specification would have been to either create a complete fullstack e-commerce site with baskets and user accounts and a database and all that jazz (most probably a MERN or PERN stack with my skillset), or to simplify the workload and hand off most shopping functions to a solution like Shopify.

But those solutions are pricey, both through man hours to create the solution, and monthly subscription costs for APIs like Shopify, in addition to hosting. And whilst these costs can be mitigated by a lot of new businesses, these options were outside of my client's price range.

My original solution was to simplify everything and create a frontend only website. No backend, no database. Just a list of all the products they offer (stored as a simple Javascript Object in a data folder) with a link to buy the item that redirects to an Etsy page for the item (which the client had already created). The amount of different items is very small and does not change very often, making this solution have very little overhead.

However, I didn't like having all the product data located in the frontend, easily available for the user to see in the browser using the browser dev tools. Whilst there isn't an issue with download size currently (the file is tiny), if the business ever took off and needed to expand to hundreds, even thousands more products, the user would be expected to download that file every time so the website can populate.

Furthermore, if there were any fields in the products data file the business wanted to completely hide from the user, this wouldn't be possible, either.

So in the end, I settled on creating a seperate CMS backend, using Strapi, GraphQL and a PostgreSQL database hosted on [Supabase](https://supabase.io/).

Strapi is very quick to setup and thus it took no time at all to migrate over the small amount of currently existing data. GraphQL (with Apollo on the frontend) made requesting the data a very simple matter, since the majority of the queries are themselves very simple. And Supabase (on top of having a very generous free tier) is similarly very quick to set up and connect to from within Strapi.

Now I had the data hidden server side, and the frontend would only ever request what was needed. And most important of all: no extra costs to pass onto my client!

Lastly, as the client's services are personalised to the customer, and the client wanted to communicate directly with their customers through email, the pages for services were simplified to each having their own contact form that emails the client with all the necessary information the client would want from their customer. This allows the client to arrange payment for their services on their own (and allow for easy scaling up in the future to include integrated Paypal/Stripe functions in the website after the form submittal, if the client wishes to pay for more work).

## Hosting

To further reduce costs, the frontend is hosted on [Netlify](https://netlify.com). This meant the client did not have to pay for hosting.

Furthermore, Netlify offer serverless functions for contact forms, simplifying everything even further.

In another effort to reduce costs, the backend is hosted for free on [Heroku](https://www.heroku.com). Normally, Heroku's free tier would be problematic as the dynos power down after a short period of inactivity (and therefore the first request from the frontend could take up to 30 seconds after a period on inactivity), but I opted to use Next.js's Static Site Generation on the frontend, meaning data is only requested at build time, making this delay invisible to the user.

Now, this is only really useful as long as the page doesn't need to be built very often (which is fine currently, as the amount of items and frequency of change is small), but in the future, scaling up to implement Next.js's Incremental Static Generation in the frontend, and the cheapest Heroku tier (so the dyno won't power down) would be very simple to implement. This would allow more frequent use of the CMS to be reflected in real time on the frontend, with the speed of a static site, for very little extra cost.

Lastly, the PostgreSQL database is hosted on [Supabase](https://supabase.io). They have an incredibly generous free tier, that is more than enough for the needs of this business.

All in all, the client did not have to pay anything for hosting. And that made them very happy.

## Technology Used

Frontend:

- Next.js
- Tailwind CSS
- Framer Motion
- GraphQL
- Apollo

Backend:

- Strapi
- GraphQL
- PostgreSQL

## Run Locally

The following are instructions for running the frontend locally. To run the backend locally, please see the [backend repository](https://github.com/vitamins999/essence-and-elements-backend).

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

Set up environment variable for the server (see below)

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this locally, the following environment variable must be included:

`SERVER_URL` - The url for the backend server. Locally, Strapi will default this to **http<nolink>://localhost:1337/graphql**, so put that in the .env file if running locally.

## Authors

- [Jools Barnett](https://www.github.com/vitamins999)
