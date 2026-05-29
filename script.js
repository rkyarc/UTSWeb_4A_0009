const filterBtn = $('.filter-btn');
const katalogItems = $('.catalog-item');

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