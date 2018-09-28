/**
* EasyHTTP Library
* Library for making HTTP requests
* 
* @version 3.0.0
* @author Andrey Bobrov
* @license MIT
*  
*/

class EasyHTTP {
    //Make an HTTP GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;

        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve (data))
        //     .catch(err => reject (err));  
        // });
    }

    //Make HTTP POST request
    async post(url,data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                    'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
    }

    //Meke an HTP PUT Request
    async put(url,data) {
        const responce = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }
            
    

    //Make an HTTP DELETE REQUEST
    async delete(url) {

         const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });

        const resData = await 'Resource Deleted...';
        return resData;    
    }

}

