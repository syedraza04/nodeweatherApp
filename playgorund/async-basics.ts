/**
 * Created by syedraza on 11/9/17.
 */


const getUser = (id, callback)=>{

    let user = {
        id,
        name:'Ali'
    };
    setTimeout(()=>{callback(user);},3000);

}

getUser(12,(user)=>{
    console.log(user);
});