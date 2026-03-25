//CRUD Operation 

//POSTMAN API Testing in serviceNow :

/* 1. Endpoint
2. CRUD Operation -> POST,GET,PATCH,DELETE
3. Authorization -> included in headers
4. Headers => headers {ContentType + Authorization}
5. Request Body => data :{ } */

/* UI --> Browser Launch(newContext) --> page fixture
API --> APIRequestContext --> request fixture */

import { test } from "@playwright/test";


test("Creating an incident using Playwright with API", async ({ request }) => {


    const response = await request.post("https://dev231458.service-now.com/api/now/table/incident",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Basic YWRtaW46WjkqTGUwd0VMLWFo"
            },
            data: {

                "short_description": "Laptop Issue - Test Short Description using Playwright API "

            }


        }
    )

        const responseBody = await response.json();
        console.log(responseBody);
        
})
