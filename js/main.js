var elForm = document.querySelector('.pizza-form') //forma
var elButton = elForm.querySelector('.pizza-button')//button
var elWhateverSelect = document.querySelector('.whatever-select') // select
var yourResultPizza = document.querySelector('.your-result-pizza') //malumot chiqadigan joy
var elCheckboxBox = document.querySelector('.js-site-checkbox-wrapper') //asosiy mahsulotlar qoshiladigan div
var elRadioSizeBox = document.querySelector('.js-size-pizza') //hajm uchun div
var elCheckboxBoxPlus = document.querySelector('.js-site-checkbox-plus-wrapper') // qoshimchalar qoshiladigan div

// div elementlar yasab oldik
var sizeDiv = document.createElement('div')
yourResultPizza.appendChild(sizeDiv)

var yourDiv = document.createElement('div')
yourResultPizza.appendChild(yourDiv)

var yourPizzaDiv = document.createElement('div')
yourResultPizza.appendChild(yourPizzaDiv)

var yourPizzaPlusDiv = document.createElement('div')
yourResultPizza.appendChild(yourPizzaPlusDiv)

// hajmi
var size = ['20sm', '30sm', '40sm']
// qolip
var brendsType = [`Ingichka`, `Qalin`, `O'rtacha`, `Bo'lka non`]
//qolip
var pizzaIngredients = ['Mol go\'shti', 'Tovuq go\'shti', 'Kurka go\'shti', 'Halol kolbasa', 'Qo\'ziqorin', 'Ko\'katlar', 'Pomidor', 'Bodring', 'Zaytun', '2 hissa pishloq']
var toppingTypes = ["achchiq", "sosiskali"]

// push qilinga maxsulotlar turadigan array
var pizzaSize = []
var yourPizza = []
var yourPizzaPlus = []

// forma jonatilganda
elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()
  alert(`so'rov yuborildi!`)
})
//option yasaldi va selectga qoshildi
for (let i = 0; i < brendsType.length; i++) {
  var result = document.createElement('option')
  result.value = brendsType[i]
  result.textContent = brendsType[i]
  elWhateverSelect.appendChild(result)

  elWhateverSelect.addEventListener('change', function () {
    yourDiv.textContent = `Noni: ${this.value}`
  })
}

// hajm
for (var i = 0; i < size.length; i++) {
  var elNewlabelSize = document.createElement('label')
  var elNewRadioSize = document.createElement('input')
  elNewRadioSize.type = 'radio'
  elNewRadioSize.name = 'radio'
  elNewRadioSize.value = size[i]

  elNewRadioSize.addEventListener('input', (e) => {

    var target = e.target.value

    if(e.target.getAttribute('value') === target || pizzaSize.indexOf(elNewRadioSize.value) > -1) {
      pizzaSize.splice(pizzaSize.indexOf(this.value), 1)
      pizzaSize.push(e.target.value)
    }
    
    sizeDiv.textContent = ''
    sizeDiv.append(`Hajmi: ${pizzaSize.join(', ')}`)
  })

  elNewlabelSize.setAttribute('class', 'mr-3')
  elNewRadioSize.setAttribute('class', 'mr-2')

  elNewlabelSize.appendChild(elNewRadioSize)
  elNewlabelSize.append(size[i])
  elRadioSizeBox.appendChild(elNewlabelSize)

}

// checkbox yasaldi va natija chiqarildi, maxsulotlar turlari
for (var i = 0; i < pizzaIngredients.length; i++) {
  var elNewlabel = document.createElement('label')
  var elNewCheckbox = document.createElement('input')
  elNewCheckbox.type = 'checkbox'
  elNewCheckbox.name = pizzaIngredients[i]
  elNewCheckbox.value = pizzaIngredients[i]

  elNewCheckbox.addEventListener('change', function() {
    if (yourPizza.indexOf(this.value) > -1) {
      yourPizza.splice(yourPizza.indexOf(this.value), 1)
    }
    else (
      yourPizza.push(this.value)
    )
    yourPizzaDiv.textContent = ''
    yourPizzaDiv.append(`Ustidagi narsalar: ${yourPizza.join(', ')}`)

  })

  elNewlabel.appendChild(elNewCheckbox)
  elNewlabel.append(pizzaIngredients[i])
  elNewlabel.setAttribute('class', 'mr-5 text-danger')
  elNewCheckbox.setAttribute('class', 'mr-2')
  elCheckboxBox.appendChild(elNewlabel)
}
// checkbox yasaldi va natija chiqarildi, qoshimcha maxsulotlar turlari
for (var i = 0; i < toppingTypes.length; i++) {
  var elNewlabel = document.createElement('label')
  var elNewCheckbox = document.createElement('input')
  elNewCheckbox.type = 'checkbox'
  elNewCheckbox.name = toppingTypes[i]
  elNewCheckbox.value = toppingTypes[i]

  elNewCheckbox.addEventListener('change', function () {
    if (yourPizzaPlus.indexOf(this.value) > -1) {
      // var pizzaIndex = yourPizzaPlus.indexOf(this.value)
      yourPizzaPlus.splice(yourPizzaPlus.indexOf(this.value), 1)
    }
    else (
      yourPizzaPlus.push(this.value)
    )
    yourPizzaPlusDiv.textContent = ''
    yourPizzaPlusDiv.append(`Qo'shimcha narsalar: ${yourPizzaPlus.join(', ')}`)

  })

  elNewlabel.appendChild(elNewCheckbox)
  elNewlabel.append(toppingTypes[i])
  elNewlabel.setAttribute('class', 'mr-5 text-danger')
  elNewCheckbox.setAttribute('class', 'mr-2')
  elCheckboxBoxPlus.appendChild(elNewlabel)
}
