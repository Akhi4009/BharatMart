import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack,HStack} from '@chakra-ui/react'
import CreditCard from './Creditcard'
import CashOnDel from './CashOnDel'

const PaymentTab = () => {
  return (
    <>
    <Tabs  >
    <HStack justify="flex-start">
  <TabList>
  <VStack>
  <Tab fontSize={{base:"xs",md:"sm"}}>Cash On Delivery</Tab>
    <Tab fontSize={{base:"xs",md:"sm"}}>Debit Card</Tab>
    <Tab fontSize={{base:"xs",md:"sm"}}>Credit Card</Tab>
    <Tab fontSize={{base:"xs",md:"sm"}}>Pay using UPI</Tab>
    <Tab fontSize={{base:"xs",md:"sm"}}>Wallets</Tab>
    <Tab fontSize={{base:"xs",md:"sm"}}>Internet Banking</Tab>
    <Tab fontSize={{base:"xs",md:"sm"}}>EMI or Pay Later</Tab>
    </VStack>
  </TabList>

  <TabPanels>
  <TabPanel>
  <CashOnDel/>
  </TabPanel>
  <TabPanel>
    <CreditCard/>
    </TabPanel>
    <TabPanel>
    <CreditCard/>
    </TabPanel>
    <TabPanel>
      <CreditCard/>
    </TabPanel>
  <TabPanel>
    <p>two!</p>
  </TabPanel>
  <TabPanel>
    <p>three!</p>
  </TabPanel>
  <TabPanel>
    <p>three!</p>
  </TabPanel>
  </TabPanels>
    
  
  </HStack>
</Tabs>
    </>
  )
}

export default PaymentTab