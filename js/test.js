fetch("/js/tragos.json")
.then(res => res.json())
.then(data => console.log(data))

//con este fetch capturo el array limpio del json