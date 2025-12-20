function show(id) {
  document.querySelectorAll("section").forEach(s => s.style.display="none");
  document.getElementById(id).style.display="block";
}

function donateNow() {
  show("centers");
}

function selectCenter(name) {
  centerName.innerText = "Selected: " + name;
  show("donor");
}

function submitDonor() {
  if(!donorName.value || !donorBlood.value || !donorContact.value){
    alert("Please fill all fields");
    return;
  }
  show("thankyou");
}

function submitRequest() {
  if(!reqName.value || !reqBlood.value || !reqLocation.value || !reqContact.value){
    alert("Please fill all fields");
    return;
  }
  alert("Request Sent");
  show("home");
}

function toggle(n){
  const p = document.getElementById("a"+n);
  p.style.display = p.style.display==="block"?"none":"block";
}

function askGemini(){
  if(!geminiQ.value){
    alert("Ask something");
    return;
  }
  geminiA.innerText =
    "According to Google Gemini, blood donation is safe and saves lives.";
}

function details(){
  show("details");
}
