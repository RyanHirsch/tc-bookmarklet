(function() {
  /*
  <select id="A151N1" title="Reason" class="x8" onchange="" name="A151N1">
    <option></option>
    <option value="AT_SITE_NO_ ACCESSZF-TvfXe">At Site/No access</option>
    <option value="AT_TRAINING_NO_ACCESS2h6KuUtC">At Training/No access</option>
    <option value="BEREAVEMENTqPrHltgI">Bereavement</option>
    <option value="CHARGE_CODE_ISSUE9YRN8Qga">Charge Code Issue</option>
    <option value="COMPUTER_PROBLEMpYDWK-9w">Computer Problem</option>
    <option value="LATE_ENTRYsCJDeGBZ">Late Entry</option>
    <option value="OUT_SICK7oaj8atR">Out Sick</option>
    <option value="WEEKENDqJ8rsUrl">Weekend</option>
  </select>
  */
  var selectArray = document.getElementsByTagName('select'),
    i = 0;

  for(i = 0; i < selectArray.length; i++) {
    if( selectArray[i].title !== "Reason" ) { continue; }
    selectArray[i].selectedIndex = 1;
  }
})();