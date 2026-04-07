import { test } from "@playwright/test";

import { SBIbank } from "../Day2/abstraction";


test(`Implementation of SBI`,async ({page}) => {
    

    const bank = new SBIbank()
    bank.auditTrnx()
    bank.depositMoney()
    console.log( bank.interestRatePolicy());
    
})