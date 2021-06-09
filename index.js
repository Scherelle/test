var number = (num)=>{
  if (num%3==0 && num%5!=0)
      console.log('Garçon');
  if (num%5==0 && num%3!=0)
      console.log('Fille');
  if (num%3==0 && num%5==0)
      console.log('GarçonFille');
  if(!(num%5==0 && num%3!=0) && !(num%3==0 && num%5!=0) && !(num%3==0 && num%5==0))
      console.log(num);
  } 

var NumbersNature = (table) => {
  table.forEach(number);
}

//Exemple
table = [6, 9, 15];
NumbersNature(table);