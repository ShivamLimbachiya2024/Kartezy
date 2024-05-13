class Html {
  createHorizontalHeaderTable = (table) => {
    let result = `<table align='center'>`;
    let headers = Object.keys(table[0]);
    
    // create table field name
    result += `<tr>`;
    headers.forEach(header=>{
      result += `<th>${header}</th>`;
    });
    result += `</tr>`
  
    //create table table data
    table.forEach(row=>{
      result += `<tr>`
      headers.forEach(header=>{
        result += `<td>${typeof row[header] == 'undefined'?"-":row[header]}</td>`;
      });
      result += `</tr>`
    })
    return `${result}
      </table>
    `
  }
  
  createVerticalHeaderTable = (table) =>{
    let result = `<table align='center'>`;
    Object.keys(table).forEach(key=>{
      result += `
        <tr>
          <th>${key}</th>
          <td>${typeof table[key] == 'undefined'?"-":table[key]}</td>
        </tr>`;
    })
    return `${result} </table>`;
  }
  
  createTable = (table) => {
    if(Array.isArray(table)==true){
      return this.createHorizontalHeaderTable(table);
    }
    else{
      return this.createVerticalHeaderTable(table);
    }
  }
  
  createHtml = (data) => {
    let html = `
    <html>
      <head>
        <title>PDF</title>
        <style>
          table {
              border-collapse: collapse;
              margin-bottom: 10px;
          }
          th, td {
            border-radius: 5px;
            text-align: left;
              padding: 8px 15px;
              border: 1px solid pink;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
              font-size: 18px;
              color: #D10024;
          }
          th{
          background-color: #D10024;
          color: #ffbcc8;
          }
          tr:nth-child(odd) {background-color: #ffbcc8;}
        </style>
      </head>
      <body>
    `;
    const dataKeys = Object.keys(data);
    if (dataKeys.indexOf('header')>=0){
      html += this.createTable(data.header)
    }
    
    if (dataKeys.indexOf('data')>=0){
      for(let i=0; i<data.data.length; i++){
        html += this.createTable(data.data[i]);
      }
    }
    
    if (dataKeys.indexOf('footer')>=0){
        html += this.createTable(data.footer);
    }
    return `${html}
      </body>
    </html>`;
  }
}

module.exports = Html;