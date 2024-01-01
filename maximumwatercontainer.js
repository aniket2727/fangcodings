



// find polose in which store the maximum water

function maximumstorage(arr){
    let minheight=0;
    let maxcapacity=1;
    let maxiwidth=arr.lenght -2
    let right=arr.lenght;
    let left=0;
    
    while(left<right){
        if(arr[left]>arr[right]){
            minheight=arr[right]
            left--
        }
        else{
            minheight=arr[left]
            right--
        }

        sum=minheight*maxiwidth
        
        if(sum>maxcapacity){
            maxcapacity=sum
            maxiwidth--
        }


        

    }
}




const data=[9,4,11,4,5,18,15]
let result=maximumstorage(data)
