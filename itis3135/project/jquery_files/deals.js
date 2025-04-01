$(document).ready(function() {
    $('#deals').on('click', 'button', function() {
        const dealId = $(this).data('deal-id');
        applyDeal(dealId);
    });

    function loadDeals() {
        $.ajax({
            url: 'api/deals', // Adjust the URL based on your API endpoint
            type: 'GET',
            dataType: 'json',
            success: function(deals) {
                const dealsContent = deals.map(deal => `
                    <div class="deal">
                        <h3>${deal.title}</h3>
                        <p>${deal.description}</p>
                        <p><strong>Discount: ${deal.discount}%</strong></p>
                        <button data-deal-id="${deal.id}">Apply Now</button>
                    </div>
                `).join('');
                $('#deals').html(dealsContent); // Changed to '#deals' to match your HTML element
            },
            error: function() {
                $('#deals').html('<p>Error loading deals. Please try again later.</p>'); // Changed to '#deals'
            }
        });
    }

    function applyDeal(dealId) {
        console.log(`Deal ${dealId} applied`);
        // Additional logic to apply the deal here, if needed- QTS
        
    }

    loadDeals();
});

