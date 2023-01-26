import { Order, OrderCart } from "../../model/order"
import { Payment } from "../../model/payment"
import { fullUrl } from "../api"

export const paymentRoute = "/api/order"

const PaymentAPI = Object.freeze({
  paypalCreateOrder: (payment) => paypalCreateOrder(payment),
  stripeCreateOrder: (payment) => stripeCreateOrder(payment),
  googlePayCreateOrder: (payment) => googlePayCreateOrder(payment),
  paypalCheckout: (id) => paypalCheckout(id),
})

const paypalCreateOrder = (order) =>
  fetch(`${fullUrl}${paymentRoute}/paypal/createOrder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })

const stripeCreateOrder = (order) =>
  fetch(`${fullUrl}${paymentRoute}/stripe/createOrder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })

const googlePayCreateOrder = (order) =>
  fetch(`${fullUrl}${paymentRoute}/googlePay/createOrder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })

const paypalCheckout = (id) =>
  fetch(`${fullUrl}${paymentRoute}/paypal/${id}/checkout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
    body: id,
  })

export default PaymentAPI
