// Cristiano
// ICS2O-Unit2-05-HTML
// March 25 2022

'use strict'
/**
 * Calculates money earned by the user and the government using the user's input.
 */
function onButtonClick() {
  const hours = parseFloat(document.getElementById("hours").value)
  const hourlypay = parseFloat(document.getElementById("hourlypay").value)
  document.getElementById("calculation").innerHTML = "<br><p>You'll earn $" + ((hours * hourlypay) * (1 - 0.18)).toFixed(2) + "</p><br><p>The government earns $" + ((hours * hourlypay) * 0.18).toFixed(2) + "</p>"
}
