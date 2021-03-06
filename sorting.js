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
//console.log(selection_sort(a));

//insertion_sort
function insertion_sort(a){
  for(let i=0;i<a.length;i++){
    let cur=a[i];
    let index=i-1;
    while(index>=0 && a[index]>  cur){
      a[index+1]=a[index];
      index-=1;
    }
    a[index+1]=cur;

  }
  return a;
}

//var a=[3,5,66,78,23,44,11,32,58];
console.log(insertion_sort(a));

//bubble sort
function bubble_sort(a){
    let is_sorted=false;
    while(!is_sorted){
      is_sorted=true;
      for(let i=0;i<a.length;i++){
        if(a[i]>a[i+1]) {
          is_sorted=false;
          let temp=a[i];
          a[i]=a[i+1];
          a[i+1]=temp;
        }
      }
    }
  return a;
}

console.log(bubble_sort(a));
