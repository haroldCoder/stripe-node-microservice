# Getting Started

This is a project that uses the Stripe library to display and generate a link, through which a user can pay for a product or service that you are trading. For this project, nodejs and expressjs with typescript were used to achieve better management and security of the code and the service itself. It should be noted that the microservice is 80% based on Stripe, what is sought with this project is a better way to implement Stripe functionality and incidentally better management by only having to make https requests.

# How to use

If you are going to use it with the docker container follow these steps.

- docker pull koder22/stripe-node-microservice: this command allows you to download the container

- docker run -d -p 3000:3000 koder22/stripe-node-microservice: this command run the container in the port 3000

# How does it work

## GET api/stripe/:api_key

This is the main route, where you can access fixed products in your stripe account, to use it you just have to put the route, and after stripe, you must put either your test or production stripe api key, this will return you an arrangement of your products, with your proper information.

- api/<you_stripe_key>

## POST api/stripe

This is the route where you can generate a stripe payment link, either in your application, or you can do it easily with tools like postman, just enter your api credential, the product data, where you want it to be redirected, when you make the payment, or where in case of canceling it, among others.

* **api key:** is the key, either public or private of your stripe. You can find it here https://dashboard.stripe.com/test/apikeys
* **success_url:** It is the url where you want to be redirected after making the payment
* **cancel_url:** is the url where you want to be redirected, if the user regrets making the payment
* **mode:** It is the modality in which you want the customer to pay, either for a subscription to your personalized products or for any other product. there are only two values "subscription: " or "payment"
* **price:** is the total for pay of product.
* **quantity:** is the amount that you will buy of that product
* **currency:** is the currency you allow to pay for the product, for default is USD
* **name:** is the name of product

## Example

## POST htt://localhost:3000/api/stripe

JSON {
  api_key: "your api key",
  mode: "payment",
  price: 1800,
  quantity: 2,
  currency: "usd",
  name: "xbox series x"
}

## Note

### **success_url and cancel_url, are they a paramethers requireds, therefore when build a petiition you must enter it. if what you want to do is a suscription, with priceId know the system what product is**
