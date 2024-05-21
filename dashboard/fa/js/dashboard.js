const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const langIcon = document.querySelector("#lang-icon")
const langDropDown = document.querySelector("#lang-dropdown")


menuBtn.addEventListener('click' , () => {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click" , () => {
    sideMenu.style.display = "none";
})

themeToggler.addEventListener("click" , () => {
    document.body.classList.toggle('dark-theme-variables');

    // themeToggler.querySelector('span').classList.toggle('active');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle("active");
    themeToggler.querySelector('span:nth-child(2)').classList.toggle("active");
})

langIcon.addEventListener("click" , () =>{
    langDropDown.classList.toggle("active")
    setTimeout(()=>langDropDown.classList.remove("active"),5000)
})


Orders.forEach(order => {
    const tr=  document.createElement('tr');
    const trContent =
`
    
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'رد شد' ? 'danger' : order.shipping === 'در انتظار' ?'warning' : 'success'}">${order.shipping}</td>
    <td class="primary">Details</td>
    
 `;

 tr.innerHTML = trContent;
 document.querySelector('table tbody').appendChild(tr);
})