$(document).ready(function () {
  fetchAsyncData()

  $(".ans-btn").on('click', function (event) {


    if (event.target.getAttribute('data-answer') === answer) {



      $(this).addClass("correct-ans")
      $(".btn").attr('disabled', 'true')
      $(".py-5.text-center").css("cursor", "no-drop")
      $("#nxt-btn").css("display", "initial")
      $("#nxt-btn").removeAttr("disabled")
      $("#nxt-btn").text("Next")

    }
    else {

      $(this).addClass(" wrong-ans")
      $(".btn").attr('disabled', 'true')
      $(".py-5.text-center").css("cursor", "no-drop")
      $("#nxt-btn").css("display", "initial")
      $("#nxt-btn").removeAttr("disabled")
      $("#nxt-btn").text("Play Again")
    }


  })

  $("#nxt-btn").click(function () {
    fetchAsyncData()
    $(".btn").removeAttr('disabled')
    $(".py-5.text-center").css("cursor", "pointer")
    $(".opt").removeClass("correct-ans")
    $(".opt").removeClass("wrong-ans")
    $("#nxt-btn").text("Next")
    $(this).attr("disabled", "true")



  })

})



function fetchData() {
  return new Promise((res, err) => {
    const data = fetch("./data.json").then(response => response.json())
    res(data)
  })
}




function gettingRandomNums(data) {
  const max = data.length
  recData = data
  const countryIndex = Math.round(Math.random() * max) 
  answer = recData[countryIndex].capital 
  const country = recData[countryIndex].country


  $("#country").text(recData[countryIndex].country)

  const wrongAns = []


  for (let i = 0; i < 3; i++) {
    let wrongIndex = Math.round(Math.random() * max)
    if (wrongIndex != countryIndex) {
      wrongAns.push(recData[wrongIndex].capital)

    }
    else {

      // console.log('mismatched');
    }
  }


  var correctIndex = Math.floor(Math.random() * 4)
  wrongAns.splice(correctIndex, 0, answer)
  const answerBox = document.getElementsByClassName("opt")


  for (let count = 0; count < answerBox.length; count++) {
    answerBox[count].innerHTML = wrongAns[count]
    answerBox[count].setAttribute("data-answer", wrongAns[count])
  }


}



async function fetchAsyncData() {
  try {

    const data = await fetchData()
    gettingRandomNums(data)

  }
  catch (err) {
    console.log(err);

  }
}

