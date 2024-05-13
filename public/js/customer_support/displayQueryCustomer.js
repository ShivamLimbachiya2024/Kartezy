const displayQueryCustomer = async() => {
  const queriesTable = document.getElementById("displayQueryTable");
  const response = await fetch("/kartezy/displayQuery");
  let queries = (await response.json()).message;
  queriesTable.innerHTML = ""
  if (response.status == 200) {
    queries = queries.filter(query => {
      query.create_at = timeDifference(query.create_at);
      query.update_at = timeDifference(query.update_at);
      return query;
    })
    queries.forEach(query => {
      queriesTable.innerHTML += displayCard(query, false);
    });
  }
  else {
    queriesTable.innerHTML = `<div>${queries || 'Queries not found'}</div>`
  }
}

const serachQuery = async(value) => {
  if(value.trim() == ""){
    await displayQueryCustomer()
  }
  else{
    const queriesTable = document.getElementById("displayQueryTable");
    const response = await fetch(`/kartezy/displayQuery?serach=${value}`);
    let queries = (await response.json()).message;
    queriesTable.innerHTML = "";
    if (response.status == 200) {
      queries = queries.filter(query => {
        query.create_at = timeDifference(query.create_at);
        query.update_at = timeDifference(query.update_at);
        return query;
      })
      queriesTable.innerHTML = "";
      queries.forEach(query => {
        queriesTable.innerHTML += displayCard(query, false);
      });
    }
    else {
      queriesTable.innerHTML = `<div>${queries || 'Queries not found'}</div>`
    }
  }
}

var socket = io();
socket.on("query_update", (result)=>{
  displayQueryCustomer();
})