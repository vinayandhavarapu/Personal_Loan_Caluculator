function computeLoan() {
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const input = document.getElementById("dateInput").value;
    const dateEntered = new Date(input);
    const todaydate = new Date();
  
    let d1 = dateEntered.getDate();
    let m1 = dateEntered.getMonth() + 1;
    let y1 = dateEntered.getFullYear();
  
    let d2 = todaydate.getDate();
    let m2 = todaydate.getMonth() + 1;
    let y2 = todaydate.getFullYear();
  
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
      d2 += month[m2 - 1];
      m2--;
    }
    if (m1 > m2) {
      m2 += 12;
      y2--;
    }
  
    const d = d2 - d1;
    const m = m2 - m1;
    const y = y2 - y1;
    const durationInMonths = y * 12 + m + d / 30;
  
    const principal = Number(amount);
    const interest = (principal * (interest_rate * 0.01)) * durationInMonths;
    const total = (principal + interest).toFixed(2);
    const interestOnly = interest.toFixed(2);
  
    const formattedInterest = interestOnly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    document.querySelector('#interest1').innerHTML = formattedInterest;
    document.querySelector('#payment').innerHTML = formattedTotal;
    document.querySelector('#year1').innerHTML = y;
    document.querySelector('#month1').innerHTML = m;
    document.querySelector('#day1').innerHTML = d;
  }
  