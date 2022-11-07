// with thanks https://github.com/alexmacarthur/netlify-lambda-function-example/blob/68a0cdc05e201d68fe80b0926b0af7ff88f15802/lambda-src/purchase.js
const process = require("process");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

const handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      payment_method_types: ["card"],
    });

    return { headers, statusCode, body: JSON.stringify({ paymentIntent }) };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};

module.exports = { handler };
