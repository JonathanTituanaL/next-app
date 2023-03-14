


const toggleFavourite = (id:number) =>{
  console.log('toggleFavllamado');
  let favoritos : number[]=JSON.parse(localStorage.getItem('favoritos')||'[]')
  if(favoritos.includes(id))
  {
    favoritos = favoritos.filter(pokeid=>pokeid!==id);
  }else{
    favoritos.push(id);
  }
  localStorage.setItem('favoritos',JSON.stringify(favoritos));
}

const existInFavourites=(id:number):boolean =>{
        console.log('llamado')
        const favoritos:number[] = JSON.parse(localStorage.getItem('favoritos')||'[]');
        return favoritos.includes(id);
}

export default {
    toggleFavourite,
    existInFavourites
}