import{fetch,Body} from "@tauri-apps/api/http";

let token_expire = localStorage.getItem('token_expire');
let token_valid = localStorage.getItem('token_valid');
let currentDate = Math.floor(new Date().getTime() / 1000);

async function testToken(token){
  const url = 'https://api.kamyroll.tech/content/v1/search';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }).then(r=>r.json());
  if(response.code=="bad_channel_id"){
    return true;
  }else{
    return false;
  }
}

function createRandomId (){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 16; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

async function getToken() {
    if(localStorage.getItem('token') == undefined || Number(token_expire) < currentDate ){
        console.log('token is undefined or expired');
        const url = 'https://api.kamyroll.tech/auth/v1/token';
        const APP_TOKEN = 'HMbQeThWmZq4t7w';
        let device_id = localStorage.getItem('device_id');
        if (device_id == undefined) {
            device_id = createRandomId();
            localStorage.setItem('device_id', device_id);
        }
        try {
          var body = Body.text(
            `device_id=${device_id}&device_type=com.nabil.kamyroll&access_token=${APP_TOKEN}`
          )
          const response = await fetch(url, {
            method: "POST",
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body,
          })
          let result = response.data;
          console.log(response);
          localStorage.setItem('token', result.access_token);
          localStorage.setItem('token_expire', result.expires_in);
          let rndate = new Date();
          rndate.setHours(rndate.getHours() + 6);
          rndate = Math.floor(rndate.getTime() / 1000);
          localStorage.setItem('token_valid', rndate);
          return result.access_token;
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('token is still valid');
    return localStorage.getItem('token');
  }
}

async function generateNewToken(){
  localStorage.removeItem('token');
  localStorage.removeItem('token_expire');
  localStorage.removeItem('token_valid');
  await getToken();
}

export {getToken,testToken,generateNewToken};
