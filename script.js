
function roiCalc(){
  const leads = parseFloat(document.getElementById('leads').value||0);
  const conv = parseFloat(document.getElementById('conv').value||0)/100.0;
  const deal = parseFloat(document.getElementById('deal').value||0);
  const cycle = parseFloat(document.getElementById('cycle').value||0);
  const cost = parseFloat(document.getElementById('cost').value||0);
  const deals = leads*conv;
  const revenue = deals*deal;
  const payback = cost>0 ? (cost/(revenue/12)).toFixed(1) : '—';
  document.getElementById('outDeals').innerText = isFinite(deals)? deals.toFixed(0):'0';
  document.getElementById('outRevenue').innerText = isFinite(revenue)? ('$'+revenue.toFixed(0)):'$0';
  document.getElementById('outPayback').innerText = payback;
  document.getElementById('outCycle').innerText = cycle>0? cycle+' days':'—';
}
document.addEventListener('DOMContentLoaded', ()=>{
  const inputs = document.querySelectorAll('input');
  inputs.forEach(i=>i.addEventListener('input', roiCalc));
  roiCalc();
});
