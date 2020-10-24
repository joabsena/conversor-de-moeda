const valuesInDolar = {
  BRL: {
    USD: 0.18,
    lang: 'pt-BR',
  },
  EUR: {
    USD: 0.85,
    lang: 'de-DE',
  },
  USD: {
    USD: 1,
    lang: 'en',
  },
};

function format(value, lang, currency) {
  return value.toLocaleString(lang, {
    style: 'currency',
    currency,
  });
}

function searchInObject(value, inCurrency, forCurrency) {
  const result =
    value * valuesInDolar[inCurrency].USD * valuesInDolar[forCurrency].USD;
  return format(result, valuesInDolar[forCurrency].lang, forCurrency);
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  var inCurrency = document.getElementById('inCurrency').value;
  var forCurrency = document.getElementById('forCurrency').value;
  var valueCurrency = document.getElementById('value').value;
  const result = searchInObject(valueCurrency, inCurrency, forCurrency);
  document.getElementById('result').innerHTML = result;
});
