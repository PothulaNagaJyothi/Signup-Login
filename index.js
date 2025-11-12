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
