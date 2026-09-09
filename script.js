document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quickQuote').addEventListener('submit', function(e) {
  e.preventDefault();
  const d = new FormData(this);
  const subject = encodeURIComponent('NEW MOVING QUOTE REQUEST - THE BEST MOVERS');
  const body = encodeURIComponent(
`NEW MOVING QUOTE REQUEST

CUSTOMER
Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email') || 'Not provided'}

MOVE DETAILS
Move Date: ${d.get('date') || 'Not selected'}
Move Type: ${d.get('moveType')}
Home Size: ${d.get('homeSize')}

PICKUP
Location: ${d.get('from')}
Access: ${d.get('pickupAccess')}

DESTINATION
Location: ${d.get('to')}
Access: ${d.get('destinationAccess')}

SPECIAL / HEAVY ITEMS
${d.get('specialItems') || 'None listed'}

ADDITIONAL DETAILS
${d.get('details') || 'None'}

Please contact me with pricing and availability.`
  );
  window.location.href = `mailto:thebestmoversfl@gmail.com?subject=${subject}&body=${body}`;
});
