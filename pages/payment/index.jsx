import Link from "next/link"

import Button from "../../components/Buttons/Button"
import AddPayment from "../../components/Profile/AddPayment"

const Payment = () => {
  return (
    <>
      <AddPayment />
      <Link href="/" className="ml-16">
        <Button name="Place Order" />
      </Link>
    </>
  )
}

export default Payment
