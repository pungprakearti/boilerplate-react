import { useState } from 'react'

const TransactionsSorter = () => {
  const isDate = (str) => {
    if (new Date(str)) return true
    else return false
  }

  const [textInput, setTextInput] = useState('')

  const handleChange = (e) => setTextInput(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    // sort data
    // create array from text
    let textToArray = textInput.split('\n')

    // create single transaction strings from array
    let tempTrans = ''
    let startTrans = false
    textToArray.forEach((t) => {
      if (startTrans) {
        console.log(t.split(' '))
      }

      // if array section starts with a date, start the transaction
      if (isDate(t.slice(0, 5)) && !startTrans) {
        startTrans = true
        tempTrans = t
        console.log(tempTrans)
      }

      console.log(startTrans, t[0])
    })
  }

  return (
    <div className='TransactionSorter'>
      <form onClick={handleSubmit}>
        <textarea onChange={handleChange} value={textInput} />
        <button>Sort</button>
      </form>
    </div>
  )
}

export default TransactionsSorter

/*
04/01 04/03 Tfr from XXXXXXXX8290 Internet Banking T Pungprakearti,
Samantha R
300.00 17,680.89
04/05 04/05 ACH Debit ACH PMT PROVIDENT FUNDIN ID1770323586 -915.56 16,765.33
04/06 04/06 ACH Debit INST XFER PAYPAL IDPAYPALSI77 Internet
Initiated Transaction-
-140.00 16,625.33
04/13 04/13 ACH Credit DIRECT DEP MANUFACTURERS B ID9111111101 4,080.69 20,706.02
04/13 04/13 ACH Debit SURE PAY MOSAIC IDCSCSM59943 -500.00 20,206.02
04/13 04/13 ACH Debit PAYMENT CITI CARD ONLINE IDCITICTP Internet
Initiated Transaction-
-8,564.75 11,641.27
04/13 04/13 ATM POS Debit Payment/Transfer Debit INDIV AMERITASLIFE
800-745-1112 NEUS #4428 #28102982
-450.00 11,191.27
04/16 04/16 ATM POS Debit Payment/Transfer Debit COMCAST
CALIFORNIA 800-COMCAST CAUS #4428 #25104900
-142.65 11,048.62
04/16 04/16 ATM POS Debit Payment/Transfer Debit NETFLIX COM
LOS GATOS CAUS #4428 # 003
-15.49 11,033.13
04/18 04/18 ACH Debit CRCARDPMT CAPITAL ONE ID9541719318
Internet Initiated Transaction-
-40.61 10,992.52
04/21 04/21 Tfr to XXXXXXXX8290 Taxes Pungprakearti, Samantha R -5,369.69 5,622.83
04/27 04/27 ACH Credit DIRECT DEP MANUFACTURERS B ID9111111103 4,080.68 9,703.51
04/30 04/30 Dividend Credit 12.51 9,716.02
*/
