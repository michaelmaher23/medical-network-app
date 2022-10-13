async function Get(URL) {
  var mydata=null;
  try {
    await fetch(URL)
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successful");
        } else {
          console.log("HTTP request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        mydata=data
           console.log(data)
      })
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
  }
  return mydata
}

async function Post (URL, data1) {
 var mydata=null
  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data1),
  })
    .then((res) => {
      if (res.ok) {
        console.log("HTTP request successful");
      } else {
        console.log("HTTP request unsuccessful");
      }
 return res
    })
    .then((res) =>res.json())
    .then((data) =>{ 
  
        
        mydata=data
          } 
    )
        return mydata
  
}

async function Delete(URL) {
  try {
    fetch("https://medicalnetworkapp.herokuapp.com/api/prods/postemail", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "https://medicalnetworkapp.herokuapp.com",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successful");
        } else {
          console.log("HTTP request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
  }
}

export {Get, Post };
