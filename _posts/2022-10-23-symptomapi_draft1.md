---
toc: true
layout: post
description: Calling and displaying information from AWS flask server
author: Vivian Ni
permalink: /frontend/api
categories: [markdown]
title: Symptom API
comments: true
---

{% include nav_frontend.html %}

<table>
  <thead>
  <tr>
    <th>Diagnosis</th>
    <th>Symptoms</th>
    <th>Yes I have it</th>
    <th>No I feel fine</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>

 // prepare HTML defined "result" container for new output
  const resultContainer = document.getElementById("result");

  const url = "https://vase.nighthawkcodescrums.gq/api/diagnosis";

  // prepare fetch GET options
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
            for (const diagnosis of Object.keys(data)) {
                const symptoms = data[diagnosis];
                console.log(diagnosis, symptoms);
            
                const tr = document.createElement("tr");
            
            // td for diagnosis cell
                const diagnosis_ele = document.createElement("td");
                diagnosis_ele.innerHTML = diagnosis;  // add fetched data to innerHTML

                 const symptom_ele = document.createElement("td");
                 symptom_ele.innerHTML = symptoms.toString();
            // this builds ALL td's (cells) into tr (row) element
                tr.appendChild(diagnosis_ele);
                tr.appendChild(symptom_ele);
                resultContainer.appendChild(tr);
            }
 
          })
      })
  //})
  // catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
    error(err + " " + url);
  });

  // Something went wrong with actions or responses
  function error(err) {
    // log as Error in console
    console.error(err);
    // append error to resultContainer
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  }

</script>