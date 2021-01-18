const stripe = require("stripe")("sk_test_WdmMYJZEmmTRhRDKmwNe6fJq00BWNT23Kk")

exports.handler = async function (event) {
  const { tokenID, email, name, description, amount } = JSON.stringfy(
    event.body
  )
  console.log("working...s")

  const custumer = await stripe.customers.create({
    description: email,
    sourse: tokenID,
  })

  await stripe.charge.create({
    customer: custumer.id,
    amount,
    name,
    description,
    currency: "usd",
  })
}
