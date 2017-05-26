function submitForm(e) {
	e.preventDefault();
	$('.shopping-list').prepend(
		'<li> \
			<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span> \
			<div class="shopping-item-controls"> \
				<button class="shopping-item-toggle"> \
					<span class="button-label">check</span> \
				</button> \
				<button class="shopping-item-delete"> \
					<span class="button-label">delete</span> \
				</button> \
			</div> \
		</li>'
	)
}

function checkItem() {
	var title = $(this).closest('li').children('.shopping-item');
	$(title).toggleClass('shopping-item__checked');
}

function deleteItem() {
	$(this).closest('li').remove();
}


$('.shopping-list').on('click', '.shopping-item-toggle', checkItem);

$('.shopping-list').on('click', '.shopping-item-delete', deleteItem);

$('#js-shopping-list-form').submit(submitForm);