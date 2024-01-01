

// find the lenght of lst world




function lenghtoflastword(arr){
    lenght=arr.lenght
    end=arr.lenght-1


    // trim the string

    while(end>=0 && arr[end]==''){
        end--
    }

    //  count the legth of array

    while(end>=0 && arr[end]!==' ')
    {
       end--;
       length++;
    }


    return length

}




const arr="aniket vijay kadam"
const result=lenghtoflastword(arr)
console.log(result)