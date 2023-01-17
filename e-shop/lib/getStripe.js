import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MRIzPSENfrNWjUmpZ80oYNWJqONR99LwUyVLxe6FXrQBmz9XjoIXx1Omop6K1pHsqVgxG0QStyvri8guYM4BCVE00cK43r4xE"
    );
  }

  return stripePromise;
};


export default getStripe;