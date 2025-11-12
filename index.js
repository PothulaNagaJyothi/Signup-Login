function signup(userName){
    let arr=['jyothi','nagajyothi','pothulanagajyothi'];
    for(let i=0;i<arr.length;i++)
    {
        if(userName===arr[i])
            return "User Already Registered, Please Login";
        else 
        {
            arr.push(userName);
            return "Signup Sucessfull, Please Login";
        }
    }
}

function login(userName,password){
    let arr=['jyothi','nagajyothi','pothulanagajyothi','hema','sai'];
    for(let i=0;i<arr.length;i++)
    {
        if(userName===arr[i] && password==='Emp@123')
            return "Login Sucessfull...";
        else if(userName!=arr[i])
            return "User Not Found, Please Signup";
        else if(userName===arr[i] && password!='Emp@123')
            return "Wrong Password....";

    }
}
