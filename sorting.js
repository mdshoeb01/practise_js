//This file is used to write code for sorting algorithms in js.

//selection sort
function selection_sort(a){
  for(let i=0;i<a.length;i++){
    let min_index=i;
    for(let j=i+1; j<a.length;j++){
      if(a[j]<a[min_index]){
        min_index=j;
      }
    }
    let temp=a[min_index];
    a[min_index]=a[i];
    a[i]=temp;
  }
  return a;
}

var a=[3,5,66,78,23,44,11,32,58];
console.log(selection_sort(a));
