  
//  let switch_elem = document.querySelector('input')
//  document.body.className = 'light'

// switch_elem.onclick = () =>{
//     document.body.className = (switch_elem.checked)? 'dark' : 'light'}
//     switch_elem.onclick = ()=> {
//         if(switch_elem.checked){
//         document.body.className = localStorage.getItem('theme')
//     }else{
//         document.body.className = 'light'
//     }
// }
// при обновлении страницы тема сохраняется

let switch_elem = document.querySelector('input')
//оператор нулевого сравнения
document.body.className = localStorage.getItem('theme') ?? 'light'
//тернарный оператор
switch_elem.checked = (localStorage.getItem('theme') === 'dark')? true : false
switch_elem.onclick = ()=> {
    if(switch_elem.checked){
    document.body.className ='dark'
    localStorage.setItem('theme','dark')
}else{
    document.body.className = 'light'
    localStorage.setItem('theme','light')
}
}