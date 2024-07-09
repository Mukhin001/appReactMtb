export default function sendRequestServer(method, serverUrl) {
    return new Promise((resolve, reject) => {
        // конструктор асинхронный код
        const xhr = new XMLHttpRequest();
        // запрос на сервер
        xhr.open(method, serverUrl);
        // успешный ответ с сервера
        xhr.onload = () => {
            // вызываем если нет оибки
            resolve(JSON.parse(xhr.response));
        };
        //ошибка с сервера
        xhr.onerror = () => {
            // вызываем если есть ошибка
            reject('error');
        };
        // наш запрос на сервер отправляем
        xhr.send();
    });
};

// const weatherApi = fetch(api);
// weatherApi.then((data) => {
//    return data.json()
// }).then((data) => { 
//     console.log(data);
// })
// return ( 
//     <div>
//         Weather
//     </div>
//  );