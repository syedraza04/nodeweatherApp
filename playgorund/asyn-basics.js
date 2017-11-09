console.log('Starting App');

//asynchronous callback

//non -blocking /io

setTimeout(() => {
    console.log('isnide of callback');
},1000);

setTimeout(() => {
    console.log('isnide of 2nd');
},0);





console.log('Finishing App');