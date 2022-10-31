---
toc: true
layout: post
author: Vivian Ni
categories: [markdown]
title: Checkbox Prototype
comments: true
---

<html lang="eng">
<head>
    <meta charset ="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VASE Diagnosis System</title>
</head>
<body>
    <div>
        <p class="title">
            Please select the symptoms you have.
        </p>
            <table>
                <thead>
                    <tr>
                        <th>Symptoms</th>
                        <th>Yes</th>
                        <th>No</th>
                    </tr>
                    </thead>
                    <tbody id="result">
                    </tbody>
            </table>
    </div>
</body>
</html>

 <script> 
    const resultContainer = document.getElementById("result");
        
        const url = "https://vase.nighthawkcodescrums.gq/api/diagnosis/symptoms";

        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        // prepare fetch PUT options, clones with JS Spread Operator (...)
        const put_options = {...options, method: 'PUT'}; // clones and replaces method

        // fetch the API
        fetch(url, options)
            // response is a RESTful "promise" on any successful fetch
            .then(response => {
                // check for response errors
                if (response.status !== 200) {
                    error('GET API response failure: ' + response.status);
                    return;
                }
                // valid response will have JSON data
                response.json().then(data => {
                    console.log(data);

                        for (const symptoms of data){
                            console.log(symptoms);
                        
                            const tr = document.createElement("tr");
                        
                            const symptom_ele = document.createElement("td");
                            symptom_ele.innerHTML = symptoms.toString();

                            const yes = document.createElement("td");
                            var yesbox = document.createElement('input');
                                yesbox.type = "checkbox";
                                yesbox.name = "name";
                                yesbox.value = "value";
                                yesbox.id = "id";

                            const no = document.createElement("td");
                            var nobox = document.createElement('input');
                                nobox.type = "checkbox";
                                nobox.name = "name";
                                nobox.value = "value";
                                nobox.id = "id";

                        // this builds ALL td's (cells) into tr element
                            td.appendChild(yes);
                            td.appendChild(no);
                            tr.appendChild(symptom_ele);
                            resultContainer.appendChild(tr);
                        }
            
                    })
                })
 </script>
