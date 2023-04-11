$('.navItem').each(function(){
    $(this).css('color', 'white');
})
$('#nav').css('background-color', '#145');
$('li:even').each(function(){
    $(this).css('background-color', '#ccc');
})
$('li:odd').each(function(){
    $(this).css('background-color', '#aaa');
})
let nameInput = $(':input')[0];
nameInput.placeholder = 'Lincoln Atkinson';