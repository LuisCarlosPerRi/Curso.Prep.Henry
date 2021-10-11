var arr =  ["castelo","pepe","lima","tobias","andrade"]
consosle.log(arr)
  for( let i=0; i<arr.length; i++){
    var aux = arr[i];
    var j= i-1
    while (j >=0 && aux.length  < arr[j].length){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = aux;
  }
  return arr;
    