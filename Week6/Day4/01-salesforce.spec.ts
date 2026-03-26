

import { test } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any
let id : any

test.describe.serial(`Salesforce`,async () => {    

test(`Generate salesforce token`, async ({ request }) => {

    const response = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "Ravisalesplay#1234",
                "grant_type": "password"
            }
            //Alt+Shift+f => format dcoument
        }
    )

    const responseBody = await response.json() // deserializarion
    console.log(responseBody);

    /*Terminal responseBody  {
  access_token: '00DNS000001rTAX!AQEAQMlxRc13Xpi9xe2fnfuvv4Oxq4ehqf8xGF1uvUNoTL2f_tLaP0CdS9RgWT8TS7MO125CU3OxoGwBODs5rDCDXmONjmHi',
  instance_url: 'https://testleaf22-dev-ed.develop.my.salesforce.com',
  id: 'https://login.salesforce.com/id/00DNS000001rTAX2A2/005NS000001C9hOYAS',
  token_type: 'Bearer',
  issued_at: '1774505864598',
  signature: '9v8RwSQ0x3OSUTIHPGbxA56V8sxWCJjSdlxF/7synPE='
} */

    token = responseBody.access_token; //00DNS000001rTAX!AQEAQMlxRc13Xpi9xe2fnfuvv4Oxq4ehqf8xGF1uvUNoTL2f_tLaP0CdS9RgWT8TS7MO125CU3OxoGwBODs5rDCDXmONjmHi
    inst_url = responseBody.instance_url; // https://testleaf22-dev-ed.develop.my.salesforce.com
    tokenType = responseBody.token_type; // Bearer


})

test(`Creation of Lead using playwright with API`, async ({ request }) => {


    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "LastName": "Ravindran",
                "Company": "Testleaf",
                "Phone": "9876543210"
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody); //{ id: '00QNS00000oJ0qj2AC', success: true, errors: [] }

    id = responseBody.id
    
})

test(`Retriving of Lead using playwright with API`, async ({ request }) => {


    const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody); //{ id: '00QNS00000oJ0qj2AC', success: true, errors: [] }
    
})

})

/* Classroom activity : Complete Update and Delete of Salesforce Lead  */