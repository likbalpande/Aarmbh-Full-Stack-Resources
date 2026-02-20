import crypto from "crypto";

const expectedSignature = crypto
    .createHmac("sha256", "rUxjip-4tisse-kafcob")
    .update(rawBody) // IMPORTANT: raw, unparsed body
    .digest("hex");
console.log("🟡 : expectedSignature:", expectedSignature);

if (expectedSignature !== req.headers["x-razorpay-signature"]) {
    throw new Error("Invalid webhook signature");
}

const data = {
    account_id: "acc_DqrptaXpss2NAZ",
    contains: ["payment"],
    created_at: 1768846836,
    entity: "event",
    event: "payment.captured",
    payload: {
        payment: {
            entity: {
                acquirer_data: { auth_code: "078958", rrn: "601918766634" },
                amount: 229900,
                amount_refunded: 0,
                amount_transferred: 0,
                bank: null,
                base_amount: 229900,
                captured: true,
                card: {
                    emi: false,
                    entity: "card",
                    id: "card_S5plKDPguWCoMR",
                    iin: "999999",
                    international: false,
                    issuer: "SBIN",
                    last4: "9162",
                    name: "",
                    network: "Visa",
                    sub_type: "consumer",
                    type: "credit",
                },
                card_id: "card_S5plKDPguWCoMR",
                contact: "+918527113636",
                created_at: 1768846814,
                currency: "INR",
                description: "Subscription Payment",
                email: "somiya.sripriya@gmail.com",
                entity: "payment",
                error_code: null,
                error_description: null,
                error_reason: null,
                error_source: null,
                error_step: null,
                fee: 5020,
                id: "pay_S5plKDPguWCoMR",
                international: false,
                invoice_id: null,
                method: "card",
                notes: { address: "" },
                order_id: "order_S5pkTEDbVYE2qx",
                refund_status: null,
                status: "captured",
                tax: 766,
                token_id: "token_S5plggZD8M5TDf",
                vpa: null,
                wallet: null,
            },
        },
    },
};
