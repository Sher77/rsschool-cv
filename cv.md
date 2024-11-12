# [rsschool-cv](https://Sher77.github.io/rsschool-cv/cv)

# Zaripov Sherzat

### Frontend Developer

---

### Contact information

**Phone:** +7 (702) 171 69-12  
**E-mail:** sherzatzaripov559@gmail.com  
**Telegram:** [@Sherrrrrz](https://t.me/Sherrrrrz)  
**GitHub:** [Sher77](https://github.com/Sher77)  
**LinkedIn:** [Zaripov Sherzat](https://www.linkedin.com/in/sherzat-zaripov-06a583245/)

---

### About me

Frontend Developer, I strive to grow in the field of web development, I have basic skills in creating interfaces and am ready for new professional challenges. I am looking for opportunities for professional growth and am ready to apply the acquired knowledge in practice. Goal-oriented, open to learning and new challenges in the field of frontend development.

---

### Skills

- HTML
- CSS (Bootstrap, SASS, BEM)
- JavaScript
- React Js, Redux (Fundamentals)
- Git, GitHub
- VSCode
- Figma

---

### Code example

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

**Example ticket:**  
`[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]`

```
function bingo(ticket, win){
  let res = 0;
  ticket.forEach(ticket => {
    ticket[0].split('').forEach(l => {
      if (l.charCodeAt() == ticket[1]) {
        res++;
      }
    })
  })

  return res >= win ? 'Winner!' : 'Loser!';
}

```

---

### Education

- 2018-2021 - Secondary education, Innovative Technical College
  - Technician-programmer
- 2021-2024 - Bachelor, International University of Information Technologies, Almaty
  - Computer science and software

---

### Languages

- Russian - native
- Kazakh - B2
- English - B1
