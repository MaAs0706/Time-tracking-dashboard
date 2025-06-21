fetch('data.json')
.then(response => response.json())
.then (data =>{
  const periodbutton = document.querySelectorAll('.period-btn')
  const activitycards = document.querySelectorAll('.activity-card')  


  let currentperiod = "daily"

  function update(period){ 
    activitycards.forEach(card => {
      const title = card.querySelector('h2').textContent
      const activity = data.find(function(item){
        return item.title === title 
      })
      if (activity){
        const time = activity.timeframes[period]
        card.querySelector('.hour').textContent = `${time.current}hrs`
        card.querySelector('.previous').textContent = `Last Week - ${time.previous}hrs`
      


      }

    })

    
  }

  update(currentperiod)

  periodbutton.forEach(button =>{
    button.addEventListener('click' , function(){
      periodbutton.forEach(function(btn){
        btn.classList.remove('active');
      })
      button.classList.add('active')
      
      currentperiod = button.id
      update(currentperiod)
    })
  })




})

