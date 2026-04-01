

import axios from "axios"


async function createIssue() {


    const response = await axios.post("https://manual-testing-demoproject.atlassian.net/rest/api/2/issue",
        /* ******************************RequestBody********************************** */
        {
            "fields": {
                "project": {
                    "key": "PF"
                },
                "issuetype": {
                    "name": "Bug"
                },
                "summary": "Test Case failed due to Login // Trigger through Playwright with API",
                "description": "Checking Login Functionalty"
            }
        },
        /* ******************************Headers********************************** */
            {
                headers:{
                    "Content-Type":"application/json",
                },
        /* ******************************Authorization********************************** */
                auth:{
                    username: "ravindranr90@gmail.com",
                    password: "ATATT3xFfGF0-DXy7FCY6dAHROv39ESPPvHwiIwElWUcjKhgSX2JcfIJ_xr-D9W9sPMDrbRBqH_5WjY5hLz0ViSXAbAOIYN_V-XOYdi5FqYFTta3vJ9Wc7valNCA5BT7fCoHxyvO-7Ib77MliijOGYpyuNOrNqmj1jgEqiB5Ofex0ludeP_Ev_Y=485B8CF6"
                }
            })


            console.log(response);
            


}

createIssue()