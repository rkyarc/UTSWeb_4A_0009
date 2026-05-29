const filterBtn = $('.filter-btn');
const katalogItems = $('.catalog-item');

let currentTheme = localStorage.getItem('theme') || 'light';
$('html').attr('data-bs-theme', currentTheme);

if (currentTheme === 'dark') {
  $('#themeIcon').removeClass('bi-moon-fill').addClass('bi-sun-fill');
  $('#themeToggle').removeClass('btn-outline-dark').addClass('btn-outline-light');
}

$('#themeToggle').click(function () {
  let theme = $('html').attr('data-bs-theme');
  
  let newTheme = (theme === 'dark') ? 'light' : 'dark';
  
  $('html').attr('data-bs-theme', newTheme);
  
  localStorage.setItem('theme', newTheme);
  
  $('#themeIcon').toggleClass('bi-moon-fill bi-sun-fill');
  $('#themeToggle').toggleClass('btn-outline-dark btn-outline-light');
});

filterBtn.click(function () {

    filterBtn.removeClass('active');
    $(this).addClass('active');

    let filterValue = $(this).data('filter');

    if (filterValue === 'all') {
        katalogItems.removeClass('d-none');
    } else {
        katalogItems.addClass('d-none');
        $('.catalog-item.' + filterValue).removeClass('d-none');
    }
})