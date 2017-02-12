// add shipping info

export function addShipping(data) {
   return {
      type: 'ADD_SHIPPING',
      data
   }
}

// add billing info

export function addBilling(data) {
   return {
      type: 'ADD_BILLING',
      data
   }
}
// add payment info

export function addPayment(data) {
   return {
      type: 'ADD_PAYMENT',
      data
   }
}