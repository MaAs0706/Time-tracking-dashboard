fetch('data.json')
.then(response => response.json())
.then (data =>{
  const periodbutton = document.querySelectorAll('.period-btn')
  const activitycards = document.querySelectorAll('.activity-card')  


  let currentperiod = "daily"

  function update(period){ 
    activitycards.forEach(function(card) {
      const title = card.querySelector('h2').textContent
      const activity = data.find(function(item){
        return item.title === title 
      })

    })

    
  }




})

